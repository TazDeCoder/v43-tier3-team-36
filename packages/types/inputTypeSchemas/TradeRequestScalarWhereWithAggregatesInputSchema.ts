import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { EnumTradeRequestStatusWithAggregatesFilterSchema } from './EnumTradeRequestStatusWithAggregatesFilterSchema';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TradeRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TradeRequestScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TradeRequestScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => TradeRequestScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TradeRequestScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TradeRequestScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => TradeRequestScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      receiverId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      tradeOfferId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      receiverComicId: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      status: z
        .union([
          z.lazy(() => EnumTradeRequestStatusWithAggregatesFilterSchema),
          z.lazy(() => TradeRequestStatusSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export default TradeRequestScalarWhereWithAggregatesInputSchema;
