import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between } from 'typeorm';
import { AccountRepository, ClientRepository } from './clients.repository';
import {
  CreateClientDto,
  CreateClientResponseDto,
} from './dto/create-client.dto';
import { GetClientsDto, GetClientsResponseDto } from './dto/get-clients.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
    @InjectRepository(AccountRepository)
    private accountRepository: AccountRepository,
  ) {}
  async createClient(
    createClientDto: CreateClientDto,
  ): Promise<CreateClientResponseDto> {
    const { name, last_name } = createClientDto;
    const client = await this.clientRepository.createClient(name, last_name);
    await this.accountRepository.createClientAccount(client);
    return { message: 'Cliente Creado Exitosamente', client };
  }
  async getClients(
    getClientsDto: GetClientsDto,
  ): Promise<GetClientsResponseDto> {
    let query = {};
    if (getClientsDto.date) {
      const start_date = new Date(getClientsDto.date);
      start_date.setUTCHours(0, 0, 0, 0);
      const end_date = new Date(getClientsDto.date);
      end_date.setUTCHours(23, 59, 59, 999);
      console.log(start_date, end_date);
      query = { created_at: Between(start_date, end_date) };
    }
    const clients = await this.clientRepository.find(query);
    return { clients };
  }
}
