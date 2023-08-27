import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { EnumTradeOfferStatusFieldRefInputSchema } from './EnumTradeOfferStatusFieldRefInputSchema';
import { ListEnumTradeOfferStatusFieldRefInputSchema } from './ListEnumTradeOfferStatusFieldRefInputSchema';
import { NestedEnumTradeOfferStatusWithAggregatesFilterSchema } from './NestedEnumTradeOfferStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTradeOfferStatusFilterSchema } from './NestedEnumTradeOfferStatusFilterSchema';

export const EnumTradeOfferStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTradeOfferStatusWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([
          z.lazy(() => TradeOfferStatusSchema),
          z.lazy(() => EnumTradeOfferStatusFieldRefInputSchema),
        ])
        .optional(),
      in: z
        .union([
          z.lazy(() => TradeOfferStatusSchema).array(),
          z.lazy(() => ListEnumTradeOfferStatusFieldRefInputSchema),
        ])
        .optional(),
      notIn: z
        .union([
          z.lazy(() => TradeOfferStatusSchema).array(),
          z.lazy(() => ListEnumTradeOfferStatusFieldRefInputSchema),
        ])
        .optional(),
      not: z
        .union([
          z.lazy(() => TradeOfferStatusSchema),
          z.lazy(() => NestedEnumTradeOfferStatusWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumTradeOfferStatusFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumTradeOfferStatusFilterSchema).optional(),
    })
    .strict();

export default EnumTradeOfferStatusWithAggregatesFilterSchema;
