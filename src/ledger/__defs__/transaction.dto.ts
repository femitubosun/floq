import {
  CurrencySchema,
  InitiatorTypeSchema,
  TransactionSchema,
} from '@/infrastructure/prisma/__defs__';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

// Create Transaction
export const CreateTransactionInputSchema = TransactionSchema.pick({
  type: true,
  initiatorId: true,
  initiatorType: true,
  idempotencyKey: true,
});

export type CreateTransactionInputSchema = z.infer<
  typeof CreateTransactionInputSchema
>;

export class CreateTransactionInputDto extends createZodDto(
  CreateTransactionInputSchema,
) {}

// Transfer to Account
export const TransferToAccountInputSchema = z.object({
  fromAccountId: z.string().cuid(),
  toAccountId: z.string().cuid(),
  amount: z.number().positive(),
  currency: CurrencySchema,
  idempotencyKey: z.string().uuid(),
  initiatorId: z.string().cuid().optional(),
  initiatorType: InitiatorTypeSchema,
});

export type TransferToAccountInputSchema = z.infer<
  typeof TransferToAccountInputSchema
>;
export class TransferToAccountInputDto extends createZodDto(
  TransferToAccountInputSchema,
) {}
