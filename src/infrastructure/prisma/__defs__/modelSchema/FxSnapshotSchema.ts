import { z } from 'zod';
import { Prisma } from '../../generated/client';
import { CurrencySchema } from '../inputTypeSchemas/CurrencySchema';
import { FxProviderSchema } from '../inputTypeSchemas/FxProviderSchema';

/////////////////////////////////////////
// FX SNAPSHOT SCHEMA
/////////////////////////////////////////

export const FxSnapshotSchema = z.object({
  baseCurrency: CurrencySchema,
  quoteCurrency: CurrencySchema,
  provider: FxProviderSchema,
  id: z.string().uuid(),
  rate: z.instanceof(Prisma.Decimal, {
    message:
      "Field 'rate' must be a Decimal. Location: ['Models', 'FxSnapshot']",
  }),
  timestamp: z.coerce.date(),
  transactionId: z.string(),
});

export type FxSnapshot = z.infer<typeof FxSnapshotSchema>;

export default FxSnapshotSchema;
