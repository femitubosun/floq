import { z } from 'zod';

export const VirtualAccountScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'currency',
  'balance',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'idempotencyKey',
]);

export default VirtualAccountScalarFieldEnumSchema;
