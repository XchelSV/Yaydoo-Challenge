import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { Transaction } from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsUUID()
  account_id: string;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
export class CreateTransactionResponseDto {
  message: string;
  transaction: Transaction;
}
