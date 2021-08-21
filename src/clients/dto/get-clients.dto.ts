import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsOptional, Matches } from 'class-validator';
import { Client } from '../entities/client.entity';

export class GetClientsDto {
  @ApiProperty({
    type: String,
    example: '2021-07-20',
    required: false,
  })
  @IsOptional()
  @Matches(/^\d{4}[-]\d{2}[-]\d{2}$/, {
    message: 'El formato de fecha deber ser AAAA-MM-DD',
  })
  date: string;
}
export class GetClientsResponseDto {
  @ApiResponseProperty({
    type: [Client],
    example: [
      {
        id: 'c547ef92-499c-47bc-93ef-aaec82122185',
        name: 'Juan',
        last_name: 'Perez',
        created_at: '2021-08-21T01:02:55.120Z',
        updated_at: '2021-08-21T01:02:55.120Z',
        accounts: [
          {
            id: '50beb054-5a46-4ff3-add5-b1c55ffc5500',
            created_at: '2021-08-21T01:02:55.130Z',
            updated_at: '2021-08-21T01:02:55.130Z',
          },
        ],
      },
    ],
  })
  clients: Client[];
}
