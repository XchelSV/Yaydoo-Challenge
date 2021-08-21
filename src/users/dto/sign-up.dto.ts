import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    type: String,
    example: 'test@example.com',
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    type: String,
    example: 'Abcdefghij.1',
  })
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Contraseña débil. Debe contar con al menos un caracter en mayúsculas, 1 caracter en minúsculas, y un número o caracter especial.',
  })
  password: string;
}
export class SignUpResponseDto {
  @ApiResponseProperty({
    type: String,
    example: 'Usuario Registrado',
  })
  message: string;
}
