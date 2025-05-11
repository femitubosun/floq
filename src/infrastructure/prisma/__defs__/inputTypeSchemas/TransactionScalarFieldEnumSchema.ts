import { z } from 'zod';

export const TransactionScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'status',
  'initiatorId',
  'initiatorType',
  'idempotencyKey',
  'metadata',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'executedAt',
]);

export default TransactionScalarFieldEnumSchema;
