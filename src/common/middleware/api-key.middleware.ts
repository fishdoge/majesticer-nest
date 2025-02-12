import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ApiKeysService } from '../../api-keys/api-keys.service';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  constructor(
    private readonly apiKeysService: ApiKeysService,
    private readonly prisma: PrismaService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const apiKey = req.header('x-api-key');

    if (!apiKey) {
      throw new UnauthorizedException('API key is missing');
    }

    const apiKeyData = await this.apiKeysService.validateApiKeyAndGetData(apiKey);

    if (!apiKeyData) {
      throw new UnauthorizedException('Invalid API key');
    }

    // 修改 response.end 來捕獲響應狀態碼
    res.on('finish', () => {
      const responseTime = Date.now() - startTime;
      this.prisma.$transaction(async (tx) => {
        await tx.apiRequest.create({
          data: {
            apiKey: {
              connect: {
                id: apiKeyData.id
              }
            },
            endpoint: req.path,
            method: req.method,
            status: res.statusCode,
            duration: responseTime,
            createdAt: new Date(),
          },
        });
      }).catch(console.error);
    });

    next();
  }
} 