import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import {
  CreateClientDto,
  CreateClientResponseDto,
} from './dto/create-client.dto';
import { GetClientsDto, GetClientsResponseDto } from './dto/get-clients.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}
  @Post('/')
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<CreateClientResponseDto> {
    return this.clientsService.createClient(createClientDto);
  }
  @Get('/')
  async getClients(
    @Query() getClientsDto: GetClientsDto,
  ): Promise<GetClientsResponseDto> {
    return this.clientsService.getClients(getClientsDto);
  }
}
