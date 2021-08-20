import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/clients/entities/account.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Between, In } from 'typeorm';
import {
  CreateTransactionDto,
  CreateTransactionResponseDto,
} from './dto/create-transaction.dto';
import {
  GetClientTransactionsDto,
  GetClientTransactionsResponseDto,
} from './dto/get-client-transactions';
import { TransactionRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionRepository)
    private transactionRepository: TransactionRepository,
  ) {}
  async createTransaction(
    createTransactionDto: CreateTransactionDto,
    account: Account,
  ): Promise<CreateTransactionResponseDto> {
    const { amount } = createTransactionDto;
    const transaction = await this.transactionRepository.createTransaction(
      amount,
      account,
    );
    return { message: 'Transacción Creada Exitosamente', transaction };
  }
  async getClientTransactions(
    getClientTransactionsDto: GetClientTransactionsDto,
    client: Client,
  ): Promise<GetClientTransactionsResponseDto> {
    let query = {};
    if (getClientTransactionsDto.date) {
      const start_date = new Date(getClientTransactionsDto.date);
      start_date.setUTCHours(0, 0, 0, 0);
      const end_date = new Date(getClientTransactionsDto.date);
      end_date.setUTCHours(23, 59, 59, 999);
      query = { created_at: Between(start_date, end_date) };
    }
    console.log(client);
    const account_ids = client.accounts.map((account) => account.id);
    console.log(account_ids);
    const transactions = await this.transactionRepository.find({
      where: {
        ...query,
        account: In(account_ids),
      },
    });
    return { transactions };
  }
}
