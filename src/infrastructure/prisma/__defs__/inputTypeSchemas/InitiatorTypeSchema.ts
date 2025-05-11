import { z } from 'zod';

export const InitiatorTypeSchema = z.enum(['USER','SYSTEM','ADMIN']);

export type InitiatorTypeType = `${z.infer<typeof InitiatorTypeSchema>}`

export default InitiatorTypeSchema;
