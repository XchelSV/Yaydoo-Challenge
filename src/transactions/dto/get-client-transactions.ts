import { IsNotEmpty, IsOptional, IsUUID, Matches } from 'class-validator';
import { Transaction } from '../entities/transaction.entity';

export class GetClientTransactionsDto {
  @IsNotEmpty()
  @IsUUID()
  client_id: string;
  @IsOptional()
  @Matches(/^\d{4}[-]\d{2}[-]\d{2}$/, {
    message: 'El formato de fecha deber ser AAAA-MM-DD',
  })
  date: string;
}
export class GetClientTransactionsResponseDto {
  transactions: Transaction[];
}
