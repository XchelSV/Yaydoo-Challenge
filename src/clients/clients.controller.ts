import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientsService } from './clients.service';
import {
  CreateClientDto,
  CreateClientResponseDto,
} from './dto/create-client.dto';
import {
  DeleteClientDto,
  DeleteClientResponseDto,
} from './dto/delete-client.dto';
import { GetClientsDto, GetClientsResponseDto } from './dto/get-clients.dto';

@Controller('clients')
@UseGuards(AuthGuard())
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
  @Delete('/')
  async deleteClient(
    @Query() deleteClientDto: DeleteClientDto,
  ): Promise<DeleteClientResponseDto> {
    return this.clientsService.deleteClient(deleteClientDto);
  }
}
