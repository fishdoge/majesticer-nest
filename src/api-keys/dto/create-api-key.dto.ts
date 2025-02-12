import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateApiKeyDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^0x[a-fA-F0-9]{40}$/, {
    message: 'Invalid SUI wallet address format',
  })
  @ApiProperty({
    description: 'The SUI wallet address for the API key',
    example: '0x1234567890123456789012345678901234567890',
  })
  walletAddress: string;
} 