import { z } from 'zod';

export const TransactionTypeSchema = z.enum(['TRANSFER','FxConversion','DEPOSIT','WITHDRAWAL','REVERSAL']);

export type TransactionTypeType = `${z.infer<typeof TransactionTypeSchema>}`

export default TransactionTypeSchema;
