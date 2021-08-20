import { EntityRepository, Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { Client } from './entities/client.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(name: string, last_name: string): Promise<Client> {
    const client = new Client();
    client.name = name;
    client.last_name = last_name;
    await this.save(client);
    return client;
  }
}

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
  async createClientAccount(client: Client): Promise<Account> {
    const account = new Account();
    account.client = client;
    await this.save(account);
    return account;
  }
}
