import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumTradeRequestStatusFilterSchema } from './EnumTradeRequestStatusFilterSchema';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { TradeOfferRelationFilterSchema } from './TradeOfferRelationFilterSchema';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';

export const TradeRequestWhereInputSchema: z.ZodType<Prisma.TradeRequestWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TradeRequestWhereInputSchema),
          z.lazy(() => TradeRequestWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TradeRequestWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TradeRequestWhereInputSchema),
          z.lazy(() => TradeRequestWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      receiverId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      tradeOfferId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      receiverComicId: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      status: z
        .union([
          z.lazy(() => EnumTradeRequestStatusFilterSchema),
          z.lazy(() => TradeRequestStatusSchema),
        ])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      receiver: z
        .union([
          z.lazy(() => UserRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional(),
      TradeOffer: z
        .union([
          z.lazy(() => TradeOfferRelationFilterSchema),
          z.lazy(() => TradeOfferWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export default TradeRequestWhereInputSchema;
