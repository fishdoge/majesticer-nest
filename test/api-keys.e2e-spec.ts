import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('ApiKeysController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    prismaService = app.get<PrismaService>(PrismaService);
    
    await app.init();
  });

  beforeEach(async () => {
    // 清理測試資料
    await prismaService.apiKey.deleteMany();
  });

  afterAll(async () => {
    await prismaService.apiKey.deleteMany();
    await app.close();
  });

  describe('/api-keys (POST)', () => {
    const validWalletAddress = '0x1234567890123456789012345678901234567890';

    it('/api-keys (POST) - success', () => {
      return request(app.getHttpServer())
        .post('/api-keys')
        .send({ walletAddress: validWalletAddress })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('apiKey');
          expect(res.body).toHaveProperty('walletAddress', validWalletAddress);
          expect(res.body.apiKey).toMatch(/^mk_[a-f0-9]{32}$/);
        });
    });

    it('/api-keys (POST) - invalid wallet address', () => {
      return request(app.getHttpServer())
        .post('/api-keys')
        .send({ walletAddress: 'invalid-address' })
        .expect(400)
        .expect((res) => {
          expect(res.body.message).toContain('Invalid SUI wallet address format');
        });
    });

    it('/api-keys (POST) - duplicate wallet address', async () => {
      // First request should succeed
      await request(app.getHttpServer())
        .post('/api-keys')
        .send({ walletAddress: validWalletAddress })
        .expect(201);

      // Second request should fail
      return request(app.getHttpServer())
        .post('/api-keys')
        .send({ walletAddress: validWalletAddress })
        .expect(409)
        .expect((res) => {
          expect(res.body.message).toBe('Wallet address already has an API key');
        });
    });
  });

  describe('Protected Routes', () => {
    it('should reject requests without API key', () => {
      return request(app.getHttpServer())
        .get('/some-protected-route')
        .expect(401)
        .expect((res) => {
          expect(res.body.message).toBe('API key is missing');
        });
    });

    it('should reject requests with invalid API key', () => {
      return request(app.getHttpServer())
        .get('/some-protected-route')
        .set('x-api-key', 'invalid-key')
        .expect(401)
        .expect((res) => {
          expect(res.body.message).toBe('Invalid API key');
        });
    });

    it('should allow requests with valid API key', async () => {
      // First create a valid API key
      const createResponse = await request(app.getHttpServer())
        .post('/api-keys')
        .send({ walletAddress: '0x1234567890123456789012345678901234567890' })
        .expect(201);

      const { apiKey } = createResponse.body;

      // Then use it to access a protected route
      return request(app.getHttpServer())
        .get('/some-protected-route')
        .set('x-api-key', apiKey)
        .expect(404); // 404 because route doesn't exist, but middleware passed
    });
  });
}); 