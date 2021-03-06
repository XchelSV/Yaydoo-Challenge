import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ClientsController } from './clients.controller';
import { AccountRepository, ClientRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientRepository, AccountRepository]),
    UsersModule,
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
