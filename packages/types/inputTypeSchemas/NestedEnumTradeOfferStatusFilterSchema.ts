import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { EnumTradeOfferStatusFieldRefInputSchema } from './EnumTradeOfferStatusFieldRefInputSchema';
import { ListEnumTradeOfferStatusFieldRefInputSchema } from './ListEnumTradeOfferStatusFieldRefInputSchema';

export const NestedEnumTradeOfferStatusFilterSchema: z.ZodType<Prisma.NestedEnumTradeOfferStatusFilter> =
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
          z.lazy(() => NestedEnumTradeOfferStatusFilterSchema),
        ])
        .optional(),
    })
    .strict();

export default NestedEnumTradeOfferStatusFilterSchema;
