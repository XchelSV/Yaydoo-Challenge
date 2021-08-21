import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ClientsService } from 'src/clients/clients.service';
import {
  CreateTransactionDto,
  CreateTransactionResponseDto,
} from './dto/create-transaction.dto';
import {
  GetClientTransactionsDto,
  GetClientTransactionsResponseDto,
} from './dto/get-client-transactions';
import { TransactionsService } from './transactions.service';

@ApiTags('Transactions Endpoints')
@ApiBearerAuth()
@Controller('transactions')
@UseGuards(AuthGuard())
export class TransactionsController {
  constructor(
    private transactionsService: TransactionsService,
    private clientService: ClientsService,
  ) {}
  @Post('/')
  @ApiOperation({
    summary: 'Endpoint para crear transacciones sobre la cuenta de un cliente',
  })
  @ApiResponse({ status: 201, type: CreateTransactionResponseDto })
  async createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<CreateTransactionResponseDto> {
    const { account_id } = createTransactionDto;
    const account = await this.clientService.getAccountById(account_id);
    return this.transactionsService.createTransaction(
      createTransactionDto,
      account,
    );
  }
  @Get('/')
  @ApiOperation({
    summary:
      'Endpoint para obtener el listado de todas las transacciones de las cuentas de un cliente',
  })
  @ApiResponse({ status: 200, type: GetClientTransactionsResponseDto })
  async getClientTransactions(
    @Query() getClientTransactions: GetClientTransactionsDto,
  ): Promise<GetClientTransactionsResponseDto> {
    const { client_id } = getClientTransactions;
    const client = await this.clientService.getClientById(client_id);
    return this.transactionsService.getClientTransactions(
      getClientTransactions,
      client,
    );
  }
}
