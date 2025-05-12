import { z } from 'zod';

export type DeepZodToPrismaSelectMapper<T extends z.ZodTypeAny> =
  T extends z.ZodObject<infer Shape>
    ? {
        select: {
          [K in keyof Shape]: DeepZodToPrismaSelectMapper<Shape[K]>;
        };
      }
    : T extends z.ZodArray<infer Item>
      ? DeepZodToPrismaSelectMapper<Item>
      : true;

export type ZodToPrismaSelectMapper<T extends z.ZodTypeAny> =
  T extends z.ZodObject<infer Shape>
    ? {
        [K in keyof Shape]: DeepZodToPrismaSelectMapper<Shape[K]>;
      }
    : T extends z.ZodArray<infer Item>
      ? DeepZodToPrismaSelectMapper<Item>
      : true;

function extractInnerType(type: z.ZodTypeAny): z.ZodTypeAny {
  if (
    type instanceof z.ZodOptional ||
    type instanceof z.ZodNullable ||
    type._def.typeName === 'ZodOptional' ||
    type._def.typeName === 'ZodNullable'
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return extractInnerType(type._def.innerType);
  }
  return type;
}

export function zodToPrismaSelect<T extends z.ZodType<any, any>>(
  schema: T,
): ZodToPrismaSelectMapper<T> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const fields = schema._def.shape();
  const result = {};
  for (const key in fields) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const field = extractInnerType(fields[key]);
    if (
      field._def.typeName === 'ZodArray' &&
      field._def.type._def.typeName === 'ZodObject'
    ) {
      result[key] = {
        select: zodToPrismaSelect(field._def.type),
      };
    } else if (field._def.typeName === 'ZodObject') {
      result[key] = {
        select: zodToPrismaSelect(field),
      };
    } else {
      result[key] = true;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result as any;
}
