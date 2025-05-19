import { FxSnapshotSchema } from '@/infrastructure/prisma/__defs__';
import { z } from 'zod';

export const FxSnapShotDto = FxSnapshotSchema.omit({
  transactionId: true,
});

export type FxSnapShotDto = z.infer<typeof FxSnapShotDto>;

// Create Fx Snapshot Input Schema
export const CreateFxSnapshotInputSchema = FxSnapshotSchema.pick({
  baseCurrency: true,
  quoteCurrency: true,
  rate: true,
  provider: true,
  transactionId: true,
});

export type CreateFxSnapshotInputSchema = z.infer<
  typeof CreateFxSnapshotInputSchema
>;
