import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import {
  CreateTransactionDto,
  CreateTransactionResponseDto,
} from './dto/create-transaction.dto';
import {
  GetClientTransactionsDto,
  GetClientTransactionsResponseDto,
} from './dto/get-client-transactions';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private transactionsService: TransactionsService,
    private clientService: ClientsService,
  ) {}
  @Post('/')
  async createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<CreateTransactionResponseDto> {
    const { account_id } = createTransactionDto;
    const account = await this.clientService.getAccountById(account_id);
    return this.transactionsService.createTransaction(
      createTransactionDto,
      account,
    );
  }
  @Get('/')
  async getClientTransactions(
    @Query() getClientTransactions: GetClientTransactionsDto,
  ): Promise<GetClientTransactionsResponseDto> {
    const { client_id } = getClientTransactions;
    const client = await this.clientService.getClientById(client_id);
    return this.transactionsService.getClientTransactions(
      getClientTransactions,
      client,
    );
  }
}
