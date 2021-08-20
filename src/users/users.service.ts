import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LogInDto, LogInResponseDto } from './dto/log-in.dto';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    const { email, password } = signUpDto;
    await this.userRepository.createUser(email, password);
    return { message: 'Usuario Registrado' };
  }
  async logIn(logInDto: LogInDto): Promise<LogInResponseDto> {
    const { email, password } = logInDto;
    const user = await this.userRepository.findOne({ email });
    if (user && user.password == password) {
      const payload = { email };
      const token: string = await this.jwtService.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException('Verifica tus credenciales');
    }
  }
}
