import { IsOptional, Matches } from 'class-validator';
import { Client } from '../entities/client.entity';

export class GetClientsDto {
  @IsOptional()
  @Matches(/^\d{4}[-]\d{2}[-]\d{2}$/, {
    message: 'El formato de fecha deber ser AAAA-MM-DD',
  })
  date: string;
}
export class GetClientsResponseDto {
  clients: Client[];
}
