import { IsEmail, IsHash, IsNotEmpty } from 'class-validator';

export class LogInDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsHash('md5')
  password: string;
}
export class LogInResponseDto {
  token: string;
}
