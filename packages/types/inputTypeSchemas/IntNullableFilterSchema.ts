import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldRefInputSchema } from './IntFieldRefInputSchema';
import { ListIntFieldRefInputSchema } from './ListIntFieldRefInputSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z
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
    lt: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    lte: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    gt: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    gte: z.union([z.number(), z.lazy(() => IntFieldRefInputSchema)]).optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable(),
  })
  .strict();

export default IntNullableFilterSchema;
