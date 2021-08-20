import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/')
  async signUp(@Body() signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    return this.usersService.signUp(signUpDto);
  }
}
