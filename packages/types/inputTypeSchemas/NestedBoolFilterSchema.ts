import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BooleanFieldRefInputSchema } from './BooleanFieldRefInputSchema';

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
  .object({
    equals: z
      .union([z.boolean(), z.lazy(() => BooleanFieldRefInputSchema)])
      .optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export default NestedBoolFilterSchema;
