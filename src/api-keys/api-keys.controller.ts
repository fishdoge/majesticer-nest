import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('api-keys')
@ApiTags('api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new API key or return existing one' })
  @ApiBody({ type: CreateApiKeyDto })
  @ApiResponse({
    status: 201,
    description: 'The API key has been successfully created.',
    schema: {
      type: 'object',
      properties: {
        apiKey: { type: 'string' },
        walletAddress: { type: 'string' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Returning existing API key for this wallet address.',
    schema: {
      type: 'object',
      properties: {
        apiKey: { type: 'string' },
        walletAddress: { type: 'string' },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: {
          type: 'array',
          items: { type: 'string' },
          example: ['Invalid SUI wallet address format'],
        },
        error: { type: 'string', example: 'Bad Request' },
      },
    },
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createApiKeyDto: CreateApiKeyDto) {
    return this.apiKeysService.create(createApiKeyDto);
  }
}
