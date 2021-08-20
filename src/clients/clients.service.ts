import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between } from 'typeorm';
import { AccountRepository, ClientRepository } from './clients.repository';
import {
  CreateClientDto,
  CreateClientResponseDto,
} from './dto/create-client.dto';
import {
  DeleteClientDto,
  DeleteClientResponseDto,
} from './dto/delete-client.dto';
import { GetClientsDto, GetClientsResponseDto } from './dto/get-clients.dto';
import { Account } from './entities/account.entity';

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
      query = { created_at: Between(start_date, end_date) };
    }
    const clients = await this.clientRepository.find(query);
    return { clients };
  }
  async deleteClient(
    deleteClientDto: DeleteClientDto,
  ): Promise<DeleteClientResponseDto> {
    const { id } = deleteClientDto;
    const client = await this.clientRepository.findOne({ id });
    if (!client) {
      throw new NotFoundException(`No se encontró un cliente con el id: ${id}`);
    }
    await this.clientRepository.delete(id);
    return { message: 'Cliente Eliminado Exitosamente' };
  }
  async getAccountById(id: string): Promise<Account> {
    const account = await this.accountRepository.findOne({ id });
    if (!account) {
      throw new NotFoundException(`No se encontró un account con el id: ${id}`);
    }
    return account;
  }
}
