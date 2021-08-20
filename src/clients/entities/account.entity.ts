import { Transaction } from '../../transactions/entities/transaction.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Client } from './client.entity';

@Entity({ name: 'TA_Account' })
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client, (client) => client.accounts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'FK_client' })
  client: Client;

  @OneToMany(() => Transaction, (transaction) => transaction.account, {
    eager: true,
    onDelete: 'CASCADE',
  })
  transactions: Transaction[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
