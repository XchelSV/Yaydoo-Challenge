import { IsNotEmpty } from 'class-validator';
import { Client } from '../entities/client.entity';

export class CreateClientDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  last_name: string;
}
export class CreateClientResponseDto {
  message: string;
  client: Client;
}
