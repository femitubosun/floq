import { z } from 'zod';
import { Prisma } from '../../generated/client';
import { CurrencySchema } from '../inputTypeSchemas/CurrencySchema';

/////////////////////////////////////////
// VIRTUAL ACCOUNT SCHEMA
/////////////////////////////////////////

export const VirtualAccountSchema = z.object({
  currency: CurrencySchema,
  id: z.string(),
  name: z.string(),
  balance: z.instanceof(Prisma.Decimal, {
    message:
      "Field 'balance' must be a Decimal. Location: ['Models', 'VirtualAccount']",
  }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
  idempotencyKey: z.string(),
});

export type VirtualAccount = z.infer<typeof VirtualAccountSchema>;

export default VirtualAccountSchema;
