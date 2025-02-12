import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateApiKeyDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^0x[a-fA-F0-9]{40}$/, {
    message: 'Invalid SUI wallet address format',
  })
  walletAddress: string;
} 