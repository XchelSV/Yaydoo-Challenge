import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    const { email, password } = signUpDto;
    await this.userRepository.createUser(email, password);
    return { message: 'Usuario Registrado' };
  }
}
