import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsEmail, IsHash, IsNotEmpty } from 'class-validator';

export class LogInDto {
  @ApiProperty({
    type: String,
    example: 'test@example.com',
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    type: String,
    example: 'ccc24bbc8c96db1c9115d886c733058b',
  })
  @IsNotEmpty()
  @IsHash('md5')
  password: string;
}
export class LogInResponseDto {
  @ApiResponseProperty({
    type: String,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InhjaGVsc3Z6QGdtYWlsLmNvbSIsImlhdCI6MTYyOTUwNzc1NiwiZXhwIjoxNjI5NTExMzU2fQ.902FsJoSGkOjDaa8OrDbKZqoh-LYz_5eh8f84KLwws8',
  })
  token: string;
}
