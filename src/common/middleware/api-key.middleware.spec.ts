import { UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyMiddleware } from './api-key.middleware';
import { ApiKeysService } from '../../api-keys/api-keys.service';
import { Request, Response } from 'express';
import { PrismaService } from '../../prisma/prisma.service';

describe('ApiKeyMiddleware', () => {
  let middleware: ApiKeyMiddleware;
  let apiKeysService: ApiKeysService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiKeyMiddleware,
        {
          provide: ApiKeysService,
          useValue: {
            validateApiKey: jest.fn(),
            validateApiKeyAndGetData: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {
            $transaction: jest.fn(),
          },
        },
      ],
    }).compile();

    middleware = module.get<ApiKeyMiddleware>(ApiKeyMiddleware);
    apiKeysService = module.get<ApiKeysService>(ApiKeysService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  describe('use', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: jest.Mock;

    beforeEach(() => {
      mockRequest = {
        header: jest.fn(),
        path: '/test',
        method: 'GET',
      };
      mockResponse = {
        statusCode: 200,
        on: jest.fn().mockImplementation((event, callback) => {
          if (event === 'finish') {
            callback();
          }
        }),
      };
      nextFunction = jest.fn();
    });

    it('should pass with valid API key', async () => {
      const validApiKey = 'mk_valid123';
      const mockApiKeyData = {
        id: '1',
        apiKey: validApiKey,
        status: 'ACTIVE',
        walletAddress: '0x1234567890123456789012345678901234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      (mockRequest.header as jest.Mock).mockReturnValue(validApiKey);
      jest.spyOn(apiKeysService, 'validateApiKeyAndGetData').mockResolvedValue(mockApiKeyData);
      jest.spyOn(prismaService, '$transaction').mockResolvedValue({} as any);

      await middleware.use(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction,
      );

      expect(nextFunction).toHaveBeenCalled();
      
      expect(prismaService.$transaction).toHaveBeenCalledWith(
        expect.any(Function),
      );
    });

    it('should throw UnauthorizedException when API key is missing', async () => {
      (mockRequest.header as jest.Mock).mockReturnValue(undefined);

      await expect(
        middleware.use(
          mockRequest as Request,
          mockResponse as Response,
          nextFunction,
        ),
      ).rejects.toThrow(UnauthorizedException);
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException when API key is invalid', async () => {
      const invalidApiKey = 'mk_invalid123';
      (mockRequest.header as jest.Mock).mockReturnValue(invalidApiKey);
      jest.spyOn(apiKeysService, 'validateApiKey').mockResolvedValue(false);

      await expect(
        middleware.use(
          mockRequest as Request,
          mockResponse as Response,
          nextFunction,
        ),
      ).rejects.toThrow(UnauthorizedException);
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should record API request', async () => {
      const validApiKey = 'mk_valid123';
      const mockApiKeyData = {
        id: '1',
        apiKey: validApiKey,
        status: 'ACTIVE',
        walletAddress: '0x1234567890123456789012345678901234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (mockRequest.header as jest.Mock).mockReturnValue(validApiKey);
      (mockRequest as any).path = '/test';
      (mockRequest as any).method = 'GET';
      (mockResponse as any).statusCode = 200;

      jest.spyOn(apiKeysService, 'validateApiKeyAndGetData').mockResolvedValue(mockApiKeyData);
      jest.spyOn(prismaService, '$transaction')
        .mockResolvedValue({} as any);

      await middleware.use(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction,
      );

      expect(nextFunction).toHaveBeenCalled();
      
      expect(prismaService.$transaction).toHaveBeenCalledWith(
        expect.any(Function),
      );
    });
  });
}); 