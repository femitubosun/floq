import { z } from 'zod';

export const FxSnapshotScalarFieldEnumSchema = z.enum([
  'id',
  'baseCurrency',
  'quoteCurrency',
  'rate',
  'timestamp',
  'provider',
  'transactionId',
]);

export default FxSnapshotScalarFieldEnumSchema;
