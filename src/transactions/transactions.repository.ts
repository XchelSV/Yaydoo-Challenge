import { Account } from 'src/clients/entities/account.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {
  async createTransaction(
    amount: number,
    account: Account,
  ): Promise<Transaction> {
    const transaction = new Transaction();
    transaction.amount = amount;
    transaction.account = account;
    await this.save(transaction);
    return transaction;
  }
}
