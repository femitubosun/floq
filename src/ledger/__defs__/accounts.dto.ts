import { PaginationInputSchema } from '@/common/utils';
import {
  CurrencySchema,
  LedgerEntrySchema,
  VirtualAccountSchema,
} from '@/infrastructure/prisma/__defs__';
import { PaginatedResultGenericSchema } from '@/infrastructure/prisma/utils';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

// Create Virtual Account Dto
export const CreateVirtualAccountSchema = VirtualAccountSchema.pick({
  name: true,
  currency: true,
  idempotencyKey: true,
  balance: true,
});

export type CreateVirtualAccountInput = z.infer<
  typeof CreateVirtualAccountSchema
>;

export class CreateVirtualAccountDto extends createZodDto(
  CreateVirtualAccountSchema,
) {}

// Update Virtual Account Dto
export const UpdateVirtualAccountSchema = CreateVirtualAccountSchema.pick({
  name: true,
});

export type UpdateVirtualAccountSchema = z.infer<
  typeof UpdateVirtualAccountSchema
>;

export class UpdateVirtualAccountDto extends createZodDto(
  UpdateVirtualAccountSchema,
) {}

// Virtual Account Dto
export const VirtualAccountDtoSchema = VirtualAccountSchema.omit({
  deletedAt: true,
  idempotencyKey: true,
});

export type VirtualAccountDtoSchema = z.infer<typeof VirtualAccountDtoSchema>;

export class VirtualAccountDto extends createZodDto(VirtualAccountDtoSchema) {}

//  Virtual Account Listing
const VirtualAccountFilterSchema = z.object({
  currency: CurrencySchema.optional(),
});

export const VirtualAccountListingInputSchema = z.object({
  pagination: PaginationInputSchema.optional(),
  search: z.string().optional(),
  filters: VirtualAccountFilterSchema.optional(),
});

export type VirtualAccountListingInput = z.infer<
  typeof VirtualAccountListingInputSchema
>;

export class VirtualAccountListingInputDto extends createZodDto(
  VirtualAccountListingInputSchema,
) {}

export const VirtualAccountListingOutput = PaginatedResultGenericSchema(
  VirtualAccountDtoSchema.array(),
);
export type VirtualAccountListingOutput = z.infer<
  typeof VirtualAccountListingOutput
>;

export class VirtualAccountListingOutputDto extends createZodDto(
  VirtualAccountListingOutput,
) {}

// Virtual Account Detail
export const VirtualAccountDetailSchema = VirtualAccountDtoSchema.extend({
  ledgerEntries: z.array(
    LedgerEntrySchema.pick({
      id: true,
      currency: true,
      amount: true,
      entryType: true,
      fxRate: true,
    }),
  ),
});

export type VirtualAccountDetailSchema = z.infer<
  typeof VirtualAccountDetailSchema
>;

export class VirtualAccountDetailOutputDto extends createZodDto(
  VirtualAccountDetailSchema,
) {}
