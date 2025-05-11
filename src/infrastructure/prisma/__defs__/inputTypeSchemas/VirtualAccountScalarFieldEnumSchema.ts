import { z } from 'zod';

export const VirtualAccountScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'currency',
  'createdAt',
  'updatedAt',
  'deletedAt',
]);

export default VirtualAccountScalarFieldEnumSchema;
