import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateApiKeyDto } from './dto/create-api-key.dto';

@Injectable()
export class ApiKeysService {
  constructor(private prisma: PrismaService) {}

  async create(createApiKeyDto: CreateApiKeyDto) {
    const { walletAddress } = createApiKeyDto;

    // 檢查錢包地址是否已經存在
    const existing = await this.prisma.apiKey.findUnique({
      where: { walletAddress },
    });

    // 如果已存在，直接返回現有的 API key
    if (existing) {
      return {
        apiKey: existing.apiKey,
        walletAddress: existing.walletAddress,
      };
    }

    // 生成新的 API key
    const apiKey = `mk_${uuidv4().replace(/-/g, '')}`;

    // 創建新的 API key 記錄
    const newApiKey = await this.prisma.apiKey.create({
      data: {
        apiKey,
        walletAddress,
        status: 'ACTIVE',
      },
    });

    return {
      apiKey: newApiKey.apiKey,
      walletAddress: newApiKey.walletAddress,
    };
  }

  async validateApiKey(apiKey: string) {
    const key = await this.prisma.apiKey.findUnique({
      where: { apiKey },
    });

    return key?.status === 'ACTIVE';
  }

  async validateApiKeyAndGetData(apiKey: string) {
    const key = await this.prisma.apiKey.findUnique({
      where: { apiKey },
    });

    if (key?.status === 'ACTIVE') {
      return key;
    }

    return null;
  }
}
