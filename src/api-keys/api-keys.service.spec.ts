import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeysService } from './api-keys.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConflictException } from '@nestjs/common';

describe('ApiKeysService', () => {
  let service: ApiKeysService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiKeysService,
        {
          provide: PrismaService,
          useValue: {
            apiKey: {
              findUnique: jest.fn(),
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ApiKeysService>(ApiKeysService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    const mockWalletAddress = '0x1234567890123456789012345678901234567890';

    it('should create new API key for valid wallet address', async () => {
      const mockApiKey = {
        apiKey: 'mk_test123',
        walletAddress: mockWalletAddress,
        status: 'ACTIVE',
        id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      jest.spyOn(prismaService.apiKey, 'findUnique').mockResolvedValue(null);
      jest.spyOn(prismaService.apiKey, 'create').mockResolvedValue(mockApiKey);

      const result = await service.create({ walletAddress: mockWalletAddress });

      expect(result).toHaveProperty('apiKey');
      expect(result).toHaveProperty('walletAddress', mockWalletAddress);
      expect(prismaService.apiKey.create).toHaveBeenCalled();
    });

    it('should throw ConflictException for duplicate wallet address', async () => {
      jest.spyOn(prismaService.apiKey, 'findUnique').mockResolvedValue({
        id: '1',
        apiKey: 'existing_key',
        walletAddress: mockWalletAddress,
        status: 'ACTIVE',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await expect(
        service.create({ walletAddress: mockWalletAddress }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('validateApiKey', () => {
    it('should return true for valid active API key', async () => {
      jest.spyOn(prismaService.apiKey, 'findUnique').mockResolvedValue({
        id: '1',
        apiKey: 'test_key',
        walletAddress: '0x1234',
        status: 'ACTIVE',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const result = await service.validateApiKey('test_key');
      expect(result).toBe(true);
    });

    it('should return false for invalid API key', async () => {
      jest.spyOn(prismaService.apiKey, 'findUnique').mockResolvedValue(null);

      const result = await service.validateApiKey('invalid_key');
      expect(result).toBe(false);
    });
  });
}); 