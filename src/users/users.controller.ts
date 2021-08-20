import { Body, Controller, Post } from '@nestjs/common';
import { LogInDto, LogInResponseDto } from './dto/log-in.dto';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    return this.usersService.signUp(signUpDto);
  }
  @Post('/login')
  async logIn(@Body() logInDto: LogInDto): Promise<LogInResponseDto> {
    return this.usersService.logIn(logInDto);
  }
}
