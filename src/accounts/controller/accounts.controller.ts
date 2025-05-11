import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  CreateVirtualAccountDto,
  VirtualAccountDto,
} from '@/accounts/__defs__/accounts';
import { ZodSerializerDto } from 'nestjs-zod';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateVirtualAccountUseCase } from '@/accounts/use-cases/create-virtual-account.use-case';
import { ListVirtualAccountsUseCase } from '@/accounts/use-cases/list-virtual-accounts.use-case';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly createAccountUseCase: CreateVirtualAccountUseCase,
    private readonly listAccountUseCase: ListVirtualAccountsUseCase,
  ) {}

  @Post()
  @ZodSerializerDto(VirtualAccountDto)
  @ApiCreatedResponse({
    type: VirtualAccountDto,
  })
  async createAccount(@Body() body: CreateVirtualAccountDto) {
    return this.createAccountUseCase.execute(body);
  }

  @Get()
  @ZodSerializerDto(VirtualAccountDto)
  @ApiOkResponse({
    description: 'A list of virtual accounts.',
    type: VirtualAccountDto,
    isArray: true,
  })
  async listAccounts() {
    return this.listAccountUseCase.execute();
  }

  // async getAccounts() {
  //   const userId = 'sss';
  //   const filters = {};
  //
  //   // const data = await this.cacheService.fetch<
  //   //   [string, Record<any, any>],
  //   //   Array<number>
  //   // >([userId, filters], {
  //   //   key: (uId: string, f: Record<any, any>) =>
  //   //     AccountsCacheKeys.userList(uId, f),
  //   //   resolver: async (uid, f) => {
  //   //     return await this.transactionRepository.findByUser(uid, f);
  //   //   },
  //   //   tags: ['transactions', `transactions_list_user_${userId}`],
  //   //   ttlSeconds: 200,
  //   // });
  // }
}
