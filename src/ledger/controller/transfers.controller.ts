import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import {
  ReverseTransactionInputDto,
  TransferToAccountRequestDto,
} from '../__defs__/transaction.dto';
import { TransferToAccountUseCase } from '../use-cases/transactions/transfer-to-account.use-case';
import { AuthedRequest } from '@/common/__defs__';
import { ReverseTransactionUseCase } from '@/ledger/use-cases/transactions/reverse-transaction.use-case';

@Controller('transfers')
export class TransfersController {
  constructor(
    private readonly transferToAccountUsc: TransferToAccountUseCase,
    private readonly reverseTransactionUsc: ReverseTransactionUseCase,
  ) {}

  @Post('to-account')
  async create(
    @Body() input: TransferToAccountRequestDto,
    @Req() req: AuthedRequest,
  ) {
    return await this.transferToAccountUsc.execute({
      ...input,
      initiatorType: 'USER',
      initiatorId: req.user.id,
    });
  }

  @Post(':id/reverse')
  async reverse(
    @Param('id') id: string,
    @Body() input: ReverseTransactionInputDto,
    @Req() req: AuthedRequest,
  ) {
    return this.reverseTransactionUsc.execute({
      originalTransaction: {
        id,
      },
      idempotencyKey: input.idempotencyKey,
      initiatorType: 'USER',
      initiatorId: req.user.id,
    });
  }
}
