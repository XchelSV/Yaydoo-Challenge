import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/clients/entities/account.entity';
import {
  CreateTransactionDto,
  CreateTransactionResponseDto,
} from './dto/create-transaction.dto';
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
}
