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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
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

@ApiTags('Clients Endpoints')
@ApiBearerAuth()
@Controller('clients')
@UseGuards(AuthGuard())
export class ClientsController {
  constructor(private clientsService: ClientsService) {}
  @Post('/')
  @ApiOperation({
    summary:
      'Endpoint para registra un cliente y lo vincula a una cuenta inicial',
  })
  @ApiResponse({ status: 201, type: CreateClientResponseDto })
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<CreateClientResponseDto> {
    return this.clientsService.createClient(createClientDto);
  }
  @Get('/')
  @ApiOperation({
    summary:
      'Endpoint para obtener el listado de clientes con sus respectivas cuentas',
  })
  @ApiResponse({ status: 200, type: GetClientsResponseDto })
  async getClients(
    @Query() getClientsDto: GetClientsDto,
  ): Promise<GetClientsResponseDto> {
    return this.clientsService.getClients(getClientsDto);
  }
  @Delete('/')
  @ApiOperation({
    summary: 'Endpoint para eliminar un cliente, con sus respectivas cuentas',
  })
  @ApiResponse({ status: 200, type: DeleteClientResponseDto })
  async deleteClient(
    @Query() deleteClientDto: DeleteClientDto,
  ): Promise<DeleteClientResponseDto> {
    return this.clientsService.deleteClient(deleteClientDto);
  }
}
