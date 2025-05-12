import {
  CreateVirtualAccountDto,
  VirtualAccountDto,
  VirtualAccountListingInputDto,
  VirtualAccountListingOutputDto,
} from '@/accounts/__defs__/accounts.dto';
import { CreateVirtualAccountUseCase } from '@/accounts/use-cases/create-virtual-account.use-case';
import { ListVirtualAccountsUseCase } from '@/accounts/use-cases/list-virtual-accounts.use-case';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ZodSerializerDto } from 'nestjs-zod';
import { GetVirtualAccountByIdUseCase } from '../use-cases/get-virtual-account-by-id.use-case';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly createAccountUseCase: CreateVirtualAccountUseCase,
    private readonly listAccountUseCase: ListVirtualAccountsUseCase,
    private readonly getAccountUseCase: GetVirtualAccountByIdUseCase,
  ) {}

  @Post()
  @ZodSerializerDto(VirtualAccountDto)
  @ApiCreatedResponse({
    type: VirtualAccountDto,
  })
  async createAccount(@Body() body: CreateVirtualAccountDto) {
    return this.createAccountUseCase.execute(body);
  }

  @Post('list')
  @ZodSerializerDto(VirtualAccountListingOutputDto)
  @ApiOkResponse({
    description: 'A list of virtual accounts.',
    type: VirtualAccountListingOutputDto,
  })
  @HttpCode(HttpStatus.OK)
  async listAccounts(@Body() body: VirtualAccountListingInputDto) {
    return this.listAccountUseCase.execute(body);
  }

  @Get(':id')
  getAccount(@Param('id') id: string) {
    return this.getAccountUseCase.execute(id);
  }
}
