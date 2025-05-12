import { VirtualAccountSchema } from '@/infrastructure/prisma/__defs__';
import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateVirtualAccountSchema = VirtualAccountSchema.pick({
  name: true,
  currency: true,
  idempotencyKey: true,
});

export type CreateVirtualAccountInput = z.infer<
  typeof CreateVirtualAccountSchema
>;

export class CreateVirtualAccountDto extends createZodDto(
  CreateVirtualAccountSchema,
) {}

export const UpdateVirtualAccountSchema = CreateVirtualAccountSchema.partial();

export type UpdateVirtualAccountSchema = z.infer<
  typeof UpdateVirtualAccountSchema
>;

export class UpdateVirtualAccountDto extends createZodDto(
  UpdateVirtualAccountSchema,
) {}

export const VirtualAccountDtoSchema = VirtualAccountSchema.omit({
  deletedAt: true,
  idempotencyKey: true,
});

export type VirtualAccountDtoSchema = z.infer<typeof VirtualAccountDtoSchema>;

export class VirtualAccountDto extends createZodDto(
  VirtualAccountSchema.omit({
    deletedAt: true,
    idempotencyKey: true,
  }),
) {}
