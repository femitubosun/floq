import { z } from 'zod';

export const CurrencySchema = z.enum(['PHP', 'USD', 'EUR', 'GBP', 'NGN']);

export type CurrencyType = `${z.infer<typeof CurrencySchema>}`;

export default CurrencySchema;
