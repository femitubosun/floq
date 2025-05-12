import { PaginationInput } from '@/common/utils';
import { z } from 'zod';

export interface PaginationParams {
  skip?: number;
  take?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    totalPages: number;
    perPage: number;
    page: number;
  };
}

export const PaginatedResultGenericSchema = <T extends z.ZodType>(schema: T) =>
  z.object({
    data: schema,
    meta: z.object({
      total: z.number(),
      totalPages: z.number(),
      perPage: z.number(),
      page: z.number(),
    }),
  });

export async function findManyWithPagination<T>(
  findManyFn: (args: any) => Promise<T[]>,
  countFn: () => Promise<number>,
  params: PaginationParams = {},
  findManyArgs: any = {},
): Promise<PaginatedResult<T>> {
  const skip = params.skip || 0;
  const take = params.take || 10;

  const [data, total] = await Promise.all([
    findManyFn({
      ...findManyArgs,
      skip,
      take,
    }),
    countFn(),
  ]);

  return {
    data,
    meta: {
      total,
      totalPages: Math.ceil(total / take),
      perPage: take,
      page: Math.floor(skip / take) + 1,
    },
  };
}

export const toPrismaSkipTake = (pagination: PaginationInput) => ({
  skip: (pagination.page - 1) * pagination.perPage,
  take: pagination.perPage,
});
