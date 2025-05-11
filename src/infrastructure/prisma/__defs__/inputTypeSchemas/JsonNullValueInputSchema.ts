import { z } from 'zod';
import { Prisma } from '../src/infrastructure/prisma/generate/client';

export const JsonNullValueInputSchema = z.enum(['JsonNull',]).transform((value) => (value === 'JsonNull' ? Prisma.JsonNull : value));