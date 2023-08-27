import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { TradeOfferNullableRelationFilterSchema } from './TradeOfferNullableRelationFilterSchema';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';

export const CollectionItemWhereInputSchema: z.ZodType<Prisma.CollectionItemWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CollectionItemWhereInputSchema),
          z.lazy(() => CollectionItemWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CollectionItemWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CollectionItemWhereInputSchema),
          z.lazy(() => CollectionItemWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      comicId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      imageUrl: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      issueNumber: z
        .union([z.lazy(() => IntFilterSchema), z.number()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      tradeOfferId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      user: z
        .union([
          z.lazy(() => UserNullableRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional()
        .nullable(),
      TradeOffer: z
        .union([
          z.lazy(() => TradeOfferNullableRelationFilterSchema),
          z.lazy(() => TradeOfferWhereInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export default CollectionItemWhereInputSchema;
