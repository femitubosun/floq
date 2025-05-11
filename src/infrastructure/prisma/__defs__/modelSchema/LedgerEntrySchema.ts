import { z } from 'zod';
import { Prisma } from '../../generated/client';
import { CurrencySchema } from '../inputTypeSchemas/CurrencySchema';
import { EntryTypeSchema } from '../inputTypeSchemas/EntryTypeSchema';

/////////////////////////////////////////
// LEDGER ENTRY SCHEMA
/////////////////////////////////////////

export const LedgerEntrySchema = z.object({
  currency: CurrencySchema,
  entryType: EntryTypeSchema,
  id: z.string(),
  transactionId: z.string(),
  accountId: z.string(),
  amount: z.instanceof(Prisma.Decimal, {
    message:
      "Field 'amount' must be a Decimal. Location: ['Models', 'LedgerEntry']",
  }),
  fxRate: z
    .instanceof(Prisma.Decimal, {
      message:
        "Field 'fxRate' must be a Decimal. Location: ['Models', 'LedgerEntry']",
    })
    .nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
});

export type LedgerEntry = z.infer<typeof LedgerEntrySchema>;

export default LedgerEntrySchema;
