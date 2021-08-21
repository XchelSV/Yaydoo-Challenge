import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { Transaction } from '../entities/transaction.entity';

export class CreateTransactionDto {
  @ApiProperty({
    type: String,
    example: '85cbfc78-4bf6-4f62-86db-440d531c16aa',
  })
  @IsNotEmpty()
  @IsUUID()
  account_id: string;
  @ApiProperty({
    type: Number,
    example: 100.5,
  })
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
export class CreateTransactionResponseDto {
  @ApiResponseProperty({
    type: String,
    example: 'Transacción Creada Exitosamente',
  })
  message: string;
  @ApiResponseProperty({
    type: Transaction,
    example: {
      amount: 100.5,
      account: {
        id: '85cbfc78-4bf6-4f62-86db-440d531c16aa',
        created_at: '2021-08-20T04:06:17.531Z',
        updated_at: '2021-08-20T04:06:17.531Z',
      },
      id: '4e61ced4-810d-4f55-b79f-178b93e7ca2f',
      created_at: '2021-08-21T00:05:22.668Z',
      updated_at: '2021-08-21T00:05:22.668Z',
    },
  })
  transaction: Transaction;
}
