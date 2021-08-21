import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Client } from '../entities/client.entity';

export class CreateClientDto {
  @ApiProperty({
    type: String,
    example: 'Xchel',
  })
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    type: String,
    example: 'Sanchez',
  })
  @IsNotEmpty()
  last_name: string;
}
export class CreateClientResponseDto {
  @ApiResponseProperty({
    type: String,
    example: 'Cliente Creado Exitosamente',
  })
  message: string;
  @ApiResponseProperty({
    type: Client,
    example: {
      name: 'Xchel',
      last_name: 'Sanchez',
      id: 'c547ef92-499c-47bc-93ef-aaec82122185',
      created_at: '2021-08-21T01:02:55.120Z',
      updated_at: '2021-08-21T01:02:55.120Z',
    },
  })
  client: Client;
}
