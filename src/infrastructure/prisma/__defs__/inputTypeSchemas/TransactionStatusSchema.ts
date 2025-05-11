import { z } from 'zod';

export const TransactionStatusSchema = z.enum([
  'PENDING',
  'COMMITTED',
  'FAILED',
  'REVERSED',
]);

export type TransactionStatusType =
  `${z.infer<typeof TransactionStatusSchema>}`;

export default TransactionStatusSchema;
