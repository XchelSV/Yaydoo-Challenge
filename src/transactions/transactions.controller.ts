import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import {
  CreateTransactionDto,
  CreateTransactionResponseDto,
} from './dto/create-transaction.dto';
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
}
