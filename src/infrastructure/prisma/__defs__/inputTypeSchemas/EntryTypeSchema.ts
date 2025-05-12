import { z } from 'zod';

export const EntryTypeSchema = z.enum(['DEBIT', 'CREDIT']);

export type EntryTypeType = `${z.infer<typeof EntryTypeSchema>}`;

export default EntryTypeSchema;
