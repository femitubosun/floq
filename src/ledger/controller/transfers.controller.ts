import { Body, Controller, Post, Req } from '@nestjs/common';
import { TransferToAccountRequestDto } from '../__defs__/transaction.dto';
import { TransferToAccountUseCase } from '../use-cases/transactions/transfer-to-account.use-case';
import { AuthedRequest } from '@/common/__defs__';

@Controller('transfers')
export class TransfersController {
  constructor(
    private readonly transferToAccountUsc: TransferToAccountUseCase,
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
}
