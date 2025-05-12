import { z } from 'zod';

export const LedgerEntryScalarFieldEnumSchema = z.enum([
  'id',
  'transactionId',
  'accountId',
  'currency',
  'amount',
  'entryType',
  'fxRate',
  'metadata',
  'createdAt',
  'updatedAt',
  'deletedAt',
]);

export default LedgerEntryScalarFieldEnumSchema;
