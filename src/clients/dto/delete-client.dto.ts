import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { version } from 'os';

export class DeleteClientDto {
  @ApiProperty({
    type: String,
    example: 'c547ef92-499c-47bc-93ef-aaec821221852021-07-20',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
export class DeleteClientResponseDto {
  @ApiResponseProperty({
    type: String,
    example: 'Cliente Eliminado Exitosamente',
  })
  message: string;
}
