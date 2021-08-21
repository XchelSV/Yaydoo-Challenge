import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LogInDto, LogInResponseDto } from './dto/log-in.dto';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';
import { UsersService } from './users.service';

@ApiTags('Users Endpoints')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  @ApiOperation({
    summary: 'Endpoint para registrar un usuario del servicio/API',
  })
  @ApiResponse({ status: 201, type: SignUpResponseDto })
  async signUp(@Body() signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    return this.usersService.signUp(signUpDto);
  }
  @Post('/login')
  @ApiOperation({
    summary: 'Endpoint para iniciar sesión',
  })
  @ApiResponse({ status: 201, type: LogInResponseDto })
  async logIn(@Body() logInDto: LogInDto): Promise<LogInResponseDto> {
    return this.usersService.logIn(logInDto);
  }
}
