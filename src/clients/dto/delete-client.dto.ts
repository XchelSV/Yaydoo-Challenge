import { IsNotEmpty, IsUUID } from 'class-validator';
import { version } from 'os';

export class DeleteClientDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
export class DeleteClientResponseDto {
  message: string;
}
