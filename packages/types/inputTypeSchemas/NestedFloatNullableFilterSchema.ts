import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FloatFieldRefInputSchema } from './FloatFieldRefInputSchema';
import { ListFloatFieldRefInputSchema } from './ListFloatFieldRefInputSchema';

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> =
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
        .union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export default NestedFloatNullableFilterSchema;
