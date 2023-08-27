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
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { CollectionItemListRelationFilterSchema } from './CollectionItemListRelationFilterSchema';
import { TradeRequestListRelationFilterSchema } from './TradeRequestListRelationFilterSchema';

export const TradeOfferWhereInputSchema: z.ZodType<Prisma.TradeOfferWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TradeOfferWhereInputSchema),
          z.lazy(() => TradeOfferWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TradeOfferWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TradeOfferWhereInputSchema),
          z.lazy(() => TradeOfferWhereInputSchema).array(),
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
      createdBy: z
        .union([
          z.lazy(() => UserRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional(),
      collection: z
        .lazy(() => CollectionItemListRelationFilterSchema)
        .optional(),
      TradeRequests: z
        .lazy(() => TradeRequestListRelationFilterSchema)
        .optional(),
    })
    .strict();

export default TradeOfferWhereInputSchema;
