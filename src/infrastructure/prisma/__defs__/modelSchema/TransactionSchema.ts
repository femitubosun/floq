import { z } from 'zod';
import { TransactionTypeSchema } from '../inputTypeSchemas/TransactionTypeSchema';
import { TransactionStatusSchema } from '../inputTypeSchemas/TransactionStatusSchema';
import { InitiatorTypeSchema } from '../inputTypeSchemas/InitiatorTypeSchema';

/////////////////////////////////////////
// TRANSACTION SCHEMA
/////////////////////////////////////////

export const TransactionSchema = z.object({
  type: TransactionTypeSchema,
  status: TransactionStatusSchema,
  initiatorType: InitiatorTypeSchema.nullish(),
  id: z.string(),
  initiatorId: z.string().nullish(),
  idempotencyKey: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
  executedAt: z.coerce.date().nullish(),
  fxSnapshotId: z.string().nullish(),
});

export type Transaction = z.infer<typeof TransactionSchema>;

export default TransactionSchema;
