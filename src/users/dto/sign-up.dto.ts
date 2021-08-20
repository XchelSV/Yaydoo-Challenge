import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Contraseña débil. Debe contar con al menos un caracter en mayúsculas, 1 caracter en minúsculas, y un número o caracter especial.',
  })
  password: string;
}
export class SignUpResponseDto {
  message: string;
}
