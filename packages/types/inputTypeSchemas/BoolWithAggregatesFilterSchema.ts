import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BooleanFieldRefInputSchema } from './BooleanFieldRefInputSchema';
import { NestedBoolWithAggregatesFilterSchema } from './NestedBoolWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedBoolFilterSchema } from './NestedBoolFilterSchema';

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.boolean(), z.lazy(() => BooleanFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export default BoolWithAggregatesFilterSchema;
