import { z } from 'zod';
import { CurrencySchema } from '../inputTypeSchemas/CurrencySchema';

/////////////////////////////////////////
// VIRTUAL ACCOUNT SCHEMA
/////////////////////////////////////////

export const VirtualAccountSchema = z.object({
  currency: CurrencySchema,
  id: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
  idempotencyKey: z.string(),
});

export type VirtualAccount = z.infer<typeof VirtualAccountSchema>;

export default VirtualAccountSchema;
