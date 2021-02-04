import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UserRegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsEmail()
  @MinLength(12)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export default UserRegisterDto;
