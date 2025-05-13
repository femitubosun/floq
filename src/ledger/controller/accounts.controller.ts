import {
  CreateVirtualAccountDto,
  UpdateVirtualAccountDto,
  VirtualAccountDto,
  VirtualAccountListingInputDto,
  VirtualAccountListingOutputDto,
} from '@/ledger/__defs__/accounts.dto';
import { CreateVirtualAccountUseCase } from '@/ledger/use-cases/virtual-account/create-virtual-account.use-case';
import { ListVirtualAccountsUseCase } from '@/ledger/use-cases/virtual-account/list-virtual-accounts.use-case';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ZodSerializerDto } from 'nestjs-zod';
import { GetVirtualAccountByIdUseCase } from '../use-cases/virtual-account/get-virtual-account-by-id.use-case';
import { UpdateVirtualAccountUseCase } from '../use-cases/virtual-account/update-virtual-account.use-case';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly createAccountUseCase: CreateVirtualAccountUseCase,
    private readonly listAccountUseCase: ListVirtualAccountsUseCase,
    private readonly getAccountUseCase: GetVirtualAccountByIdUseCase,
    private readonly updateVirtualAccountUseCase: UpdateVirtualAccountUseCase,
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

  @Patch(':id')
  async updateAccount(
    @Param('id') id: string,
    @Body() body: UpdateVirtualAccountDto,
  ) {
    return this.updateVirtualAccountUseCase.execute(id, body);
  }
}
