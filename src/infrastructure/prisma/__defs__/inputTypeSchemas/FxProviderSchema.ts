import { z } from 'zod';

export const FxProviderSchema = z.enum(['CBN', 'OPENEXCHANGERATES']);

export type FxProviderType = `${z.infer<typeof FxProviderSchema>}`;

export default FxProviderSchema;
