import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [ClientsModule, UsersModule, TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
