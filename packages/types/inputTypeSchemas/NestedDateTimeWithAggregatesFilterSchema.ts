import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldRefInputSchema } from './DateTimeFieldRefInputSchema';
import { ListDateTimeFieldRefInputSchema } from './ListDateTimeFieldRefInputSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedDateTimeFilterSchema } from './NestedDateTimeFilterSchema';

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      in: z
        .union([
          z.coerce.date().array(),
          z.lazy(() => ListDateTimeFieldRefInputSchema),
        ])
        .optional(),
      notIn: z
        .union([
          z.coerce.date().array(),
          z.lazy(() => ListDateTimeFieldRefInputSchema),
        ])
        .optional(),
      lt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      lte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      gte: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldRefInputSchema)])
        .optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export default NestedDateTimeWithAggregatesFilterSchema;
