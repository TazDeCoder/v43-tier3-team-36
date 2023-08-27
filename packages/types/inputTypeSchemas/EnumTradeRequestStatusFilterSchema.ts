import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { EnumTradeRequestStatusFieldRefInputSchema } from './EnumTradeRequestStatusFieldRefInputSchema';
import { ListEnumTradeRequestStatusFieldRefInputSchema } from './ListEnumTradeRequestStatusFieldRefInputSchema';
import { NestedEnumTradeRequestStatusFilterSchema } from './NestedEnumTradeRequestStatusFilterSchema';

export const EnumTradeRequestStatusFilterSchema: z.ZodType<Prisma.EnumTradeRequestStatusFilter> =
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
          z.lazy(() => NestedEnumTradeRequestStatusFilterSchema),
        ])
        .optional(),
    })
    .strict();

export default EnumTradeRequestStatusFilterSchema;
