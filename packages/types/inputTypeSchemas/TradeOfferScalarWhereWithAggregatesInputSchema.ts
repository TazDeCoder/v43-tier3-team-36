import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumTradeOfferTypeWithAggregatesFilterSchema } from './EnumTradeOfferTypeWithAggregatesFilterSchema';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { EnumTradeOfferStatusWithAggregatesFilterSchema } from './EnumTradeOfferStatusWithAggregatesFilterSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TradeOfferScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TradeOfferScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TradeOfferScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TradeOfferScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TradeOfferScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TradeOfferScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TradeOfferScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      type: z
        .union([
          z.lazy(() => EnumTradeOfferTypeWithAggregatesFilterSchema),
          z.lazy(() => TradeOfferTypeSchema),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => EnumTradeOfferStatusWithAggregatesFilterSchema),
          z.lazy(() => TradeOfferStatusSchema),
        ])
        .optional(),
      createdById: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      price: z
        .union([
          z.lazy(() => FloatNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      phoneNumber: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      message: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      wantedComicId: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export default TradeOfferScalarWhereWithAggregatesInputSchema;
