import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as md5 from 'md5';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(email: string, password: string): Promise<void> {
    const user = new User();
    user.email = email;
    user.password = md5(password);
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email ya registrado');
      } else {
        throw new InternalServerErrorException(error.toString());
      }
    }
  }
}
