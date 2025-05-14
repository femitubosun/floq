import {
  CurrencySchema,
  InitiatorTypeSchema,
  TransactionSchema,
  TransactionStatusSchema,
} from '@/infrastructure/prisma/__defs__';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const TransactionDtoSchema = TransactionSchema.omit({
  idempotencyKey: true,
});

export type TransactionDtoSchema = z.infer<typeof TransactionDtoSchema>;

// Create Transaction
export const CreateTransactionInputSchema = TransactionSchema.pick({
  type: true,
  initiatorId: true,
  initiatorType: true,
  idempotencyKey: true,
}).extend({
  status: TransactionStatusSchema.optional(),
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

export class TransferToAccountRequestDto extends createZodDto(
  TransferToAccountInputSchema.omit({
    initiatorId: true,
    initiatorType: true,
  }),
) {}
