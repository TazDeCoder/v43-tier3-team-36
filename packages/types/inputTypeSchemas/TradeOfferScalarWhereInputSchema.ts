import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumTradeOfferTypeFilterSchema } from './EnumTradeOfferTypeFilterSchema';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { EnumTradeOfferStatusFilterSchema } from './EnumTradeOfferStatusFilterSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TradeOfferScalarWhereInputSchema: z.ZodType<Prisma.TradeOfferScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TradeOfferScalarWhereInputSchema),
          z.lazy(() => TradeOfferScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TradeOfferScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TradeOfferScalarWhereInputSchema),
          z.lazy(() => TradeOfferScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      type: z
        .union([
          z.lazy(() => EnumTradeOfferTypeFilterSchema),
          z.lazy(() => TradeOfferTypeSchema),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => EnumTradeOfferStatusFilterSchema),
          z.lazy(() => TradeOfferStatusSchema),
        ])
        .optional(),
      createdById: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      price: z
        .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      phoneNumber: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      email: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      message: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      wantedComicId: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default TradeOfferScalarWhereInputSchema;
