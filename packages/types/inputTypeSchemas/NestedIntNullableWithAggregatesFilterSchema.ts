import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldRefInputSchema } from './IntFieldRefInputSchema';
import { ListIntFieldRefInputSchema } from './ListIntFieldRefInputSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedFloatNullableFilterSchema } from './NestedFloatNullableFilterSchema';

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.number(), z.lazy(() => IntFieldRefInputSchema)])
        .optional()
        .nullable(),
      in: z
        .union([z.number().array(), z.lazy(() => ListIntFieldRefInputSchema)])
        .optional()
        .nullable(),
      notIn: z
        .union([z.number().array(), z.lazy(() => ListIntFieldRefInputSchema)])
        .optional()
        .nullable(),
      lt: z
        .union([z.number(), z.lazy(() => IntFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.number(), z.lazy(() => IntFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.number(), z.lazy(() => IntFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.number(), z.lazy(() => IntFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    })
    .strict();

export default NestedIntNullableWithAggregatesFilterSchema;
