import { z } from 'zod';

/* eslint-disable */

export type MaybeZodValue<
  T = z.ZodType | undefined,
  FB = any,
> = T extends z.ZodType ? z.infer<T> : FB;

export function isZodType(value: any): value is z.ZodType {
  return (
    value instanceof z.ZodType && typeof (value as any)?.parse === 'function'
  );
}

export function isZodObject(value: any): value is z.ZodObject<any> {
  return (
    value instanceof z.ZodObject && typeof value?.passthrough === 'function'
  );
}

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
    return extractInnerType(type._def.innerType);
  }
  return type;
}

export function zodToPrismaSelect<T extends z.ZodType<any, any>>(
  schema: T,
): ZodToPrismaSelectMapper<T> {
  const fields = schema._def.shape();
  const result = {};
  for (const key in fields) {
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
  return result as any;
}
