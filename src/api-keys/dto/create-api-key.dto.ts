import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Validate } from 'class-validator';
import { isValidSuiAddress } from '@mysten/sui/utils';

// 自定義驗證器
export function IsSuiAddress(validationOptions?: any) {
  return function (object: any, propertyName: string) {
    Validate(
      (value: any) => {
        if (typeof value !== 'string') return false;
        return isValidSuiAddress(value);
      },
      {
        message: 'Invalid SUI wallet address',
        ...validationOptions,
      },
    )(object, propertyName);
  };
}

export class CreateApiKeyDto {
  @IsString()
  @IsNotEmpty()
  @IsSuiAddress()
  @ApiProperty({
    description: 'The SUI wallet address for the API key',
    example:
      '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
  })
  walletAddress: string;
}
