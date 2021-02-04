import { IsString, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UserUpdateDto {
  @IsString()
  @IsOptional()
  @MinLength(4)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(12)
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(6)
  password: string;
}
