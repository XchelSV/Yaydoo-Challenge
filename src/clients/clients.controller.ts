import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import {
  CreateClientDto,
  CreateClientResponseDto,
} from './dto/create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}
  @Post('/')
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<CreateClientResponseDto> {
    return this.clientsService.createClient(createClientDto);
  }
}
