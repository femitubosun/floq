import { z } from 'zod';

export const PaginationInputSchema = z.object({
  page: z.number().min(1).default(1),
  perPage: z.number().min(1).max(100).default(10),
});
export type PaginationInput = z.infer<typeof PaginationInputSchema>;
