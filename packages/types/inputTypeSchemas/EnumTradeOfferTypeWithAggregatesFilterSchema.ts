import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { EnumTradeOfferTypeFieldRefInputSchema } from './EnumTradeOfferTypeFieldRefInputSchema';
import { ListEnumTradeOfferTypeFieldRefInputSchema } from './ListEnumTradeOfferTypeFieldRefInputSchema';
import { NestedEnumTradeOfferTypeWithAggregatesFilterSchema } from './NestedEnumTradeOfferTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTradeOfferTypeFilterSchema } from './NestedEnumTradeOfferTypeFilterSchema';

export const EnumTradeOfferTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTradeOfferTypeWithAggregatesFilter> =
  z
    .object({
      equals: z
        .union([
          z.lazy(() => TradeOfferTypeSchema),
          z.lazy(() => EnumTradeOfferTypeFieldRefInputSchema),
        ])
        .optional(),
      in: z
        .union([
          z.lazy(() => TradeOfferTypeSchema).array(),
          z.lazy(() => ListEnumTradeOfferTypeFieldRefInputSchema),
        ])
        .optional(),
      notIn: z
        .union([
          z.lazy(() => TradeOfferTypeSchema).array(),
          z.lazy(() => ListEnumTradeOfferTypeFieldRefInputSchema),
        ])
        .optional(),
      not: z
        .union([
          z.lazy(() => TradeOfferTypeSchema),
          z.lazy(() => NestedEnumTradeOfferTypeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumTradeOfferTypeFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumTradeOfferTypeFilterSchema).optional(),
    })
    .strict();

export default EnumTradeOfferTypeWithAggregatesFilterSchema;
