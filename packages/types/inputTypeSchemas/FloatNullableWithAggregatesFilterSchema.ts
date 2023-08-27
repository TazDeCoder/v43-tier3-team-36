import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FloatFieldRefInputSchema } from './FloatFieldRefInputSchema';
import { ListFloatFieldRefInputSchema } from './ListFloatFieldRefInputSchema';
import { NestedFloatNullableWithAggregatesFilterSchema } from './NestedFloatNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedFloatNullableFilterSchema } from './NestedFloatNullableFilterSchema';

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.number(), z.lazy(() => FloatFieldRefInputSchema)])
        .optional()
        .nullable(),
      in: z
        .union([z.number().array(), z.lazy(() => ListFloatFieldRefInputSchema)])
        .optional()
        .nullable(),
      notIn: z
        .union([z.number().array(), z.lazy(() => ListFloatFieldRefInputSchema)])
        .optional()
        .nullable(),
      lt: z
        .union([z.number(), z.lazy(() => FloatFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.number(), z.lazy(() => FloatFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.number(), z.lazy(() => FloatFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.number(), z.lazy(() => FloatFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
    })
    .strict();

export default FloatNullableWithAggregatesFilterSchema;
