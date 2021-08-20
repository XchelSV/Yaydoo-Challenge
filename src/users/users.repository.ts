import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as md5 from 'md5';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(email: string, password: string): Promise<void> {
    const user = new User();
    user.email = email;
    user.password = md5(password);
    await this.save(user);
  }
}
