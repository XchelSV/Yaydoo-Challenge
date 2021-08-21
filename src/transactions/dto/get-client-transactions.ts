import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID, Matches } from 'class-validator';
import { Transaction } from '../entities/transaction.entity';

export class GetClientTransactionsDto {
  @ApiProperty({
    type: String,
    example: '85cbfc78-4bf6-4f62-86db-440d531c16aa',
  })
  @IsNotEmpty()
  @IsUUID()
  client_id: string;
  @ApiProperty({
    type: String,
    example: '2020-07-20',
    required: false,
  })
  @IsOptional()
  @Matches(/^\d{4}[-]\d{2}[-]\d{2}$/, {
    message: 'El formato de fecha deber ser AAAA-MM-DD',
  })
  date: string;
}
export class GetClientTransactionsResponseDto {
  @ApiResponseProperty({
    type: [Transaction],
    example: [
      {
        id: 'a38e7602-fd74-4954-a411-a6e1d1cd87ba',
        amount: '100.5',
        created_at: '2021-08-21T01:32:41.693Z',
        updated_at: '2021-08-21T01:32:41.693Z',
        account: {
          id: '7a17c805-986a-4185-b816-654c8ea44ade',
          created_at: '2021-08-21T01:11:11.440Z',
          updated_at: '2021-08-21T01:11:11.440Z',
        },
      },
    ],
  })
  transactions: Transaction[];
}
