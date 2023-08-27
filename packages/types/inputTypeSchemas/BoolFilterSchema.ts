import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BooleanFieldRefInputSchema } from './BooleanFieldRefInputSchema';
import { NestedBoolFilterSchema } from './NestedBoolFilterSchema';

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z
      .union([z.boolean(), z.lazy(() => BooleanFieldRefInputSchema)])
      .optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export default BoolFilterSchema;
