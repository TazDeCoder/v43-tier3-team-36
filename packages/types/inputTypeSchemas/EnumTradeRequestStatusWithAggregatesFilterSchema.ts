import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { EnumTradeRequestStatusFieldRefInputSchema } from './EnumTradeRequestStatusFieldRefInputSchema';
import { ListEnumTradeRequestStatusFieldRefInputSchema } from './ListEnumTradeRequestStatusFieldRefInputSchema';
import { NestedEnumTradeRequestStatusWithAggregatesFilterSchema } from './NestedEnumTradeRequestStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTradeRequestStatusFilterSchema } from './NestedEnumTradeRequestStatusFilterSchema';

export const EnumTradeRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTradeRequestStatusWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([
          z.lazy(() => TradeRequestStatusSchema),
          z.lazy(() => EnumTradeRequestStatusFieldRefInputSchema),
        ])
        .optional(),
      in: z
        .union([
          z.lazy(() => TradeRequestStatusSchema).array(),
          z.lazy(() => ListEnumTradeRequestStatusFieldRefInputSchema),
        ])
        .optional(),
      notIn: z
        .union([
          z.lazy(() => TradeRequestStatusSchema).array(),
          z.lazy(() => ListEnumTradeRequestStatusFieldRefInputSchema),
        ])
        .optional(),
      not: z
        .union([
          z.lazy(() => TradeRequestStatusSchema),
          z.lazy(() => NestedEnumTradeRequestStatusWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumTradeRequestStatusFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumTradeRequestStatusFilterSchema).optional(),
    })
    .strict();

export default EnumTradeRequestStatusWithAggregatesFilterSchema;
