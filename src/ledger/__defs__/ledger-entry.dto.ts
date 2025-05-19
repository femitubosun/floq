import { LedgerEntrySchema } from '@/infrastructure/prisma/__defs__';
import { z } from 'zod';
import { Money } from '@/common/objects/money';
import { FloqDecimal } from '@/common/__defs__';

export const LedgerEntryDtoSchema = LedgerEntrySchema.omit({
  accountId: true,
});

export type LedgerEntryDtoSchema = z.infer<typeof LedgerEntryDtoSchema>;

export const CreateLedgerEntryInputSchema = LedgerEntrySchema.pick({
  transactionId: true,
  accountId: true,
  amount: true,
  currency: true,
  entryType: true,
  fxRate: true,
});

export type CreateLedgerEntryInputSchema = z.infer<
  typeof CreateLedgerEntryInputSchema
>;

export const CreateLedgerEntriesForTransactionInputSchema = z.object({
  transactionId: z.string(),
  fromAccountId: z.string(),
  toAccountId: z.string(),
  amountToTransfer: z.instanceof(Money),
  amountToReceive: z.instanceof(Money),
});

export type CreateLedgerEntriesForTransactionInputSchema = z.infer<
  typeof CreateLedgerEntriesForTransactionInputSchema
>;

export const LedgerEntryDtoSchemaWithAccount = LedgerEntrySchema.extend({
  account: z.object({
    id: z.string(),
    name: z.string(),
    currency: z.string(),
    balance: z.instanceof(FloqDecimal),
  }),
});

export type LedgerEntryDtoSchemaWithAccount = z.infer<
  typeof LedgerEntryDtoSchemaWithAccount
>;
