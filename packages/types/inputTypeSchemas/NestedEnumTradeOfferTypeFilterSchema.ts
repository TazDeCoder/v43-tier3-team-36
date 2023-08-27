import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { EnumTradeOfferTypeFieldRefInputSchema } from './EnumTradeOfferTypeFieldRefInputSchema';
import { ListEnumTradeOfferTypeFieldRefInputSchema } from './ListEnumTradeOfferTypeFieldRefInputSchema';

export const NestedEnumTradeOfferTypeFilterSchema: z.ZodType<Prisma.NestedEnumTradeOfferTypeFilter> =
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
          z.lazy(() => NestedEnumTradeOfferTypeFilterSchema),
        ])
        .optional(),
    })
    .strict();

export default NestedEnumTradeOfferTypeFilterSchema;
