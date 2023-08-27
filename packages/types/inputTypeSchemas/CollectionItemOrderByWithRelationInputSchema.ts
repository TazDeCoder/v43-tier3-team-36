import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { TradeOfferOrderByWithRelationInputSchema } from './TradeOfferOrderByWithRelationInputSchema';

export const CollectionItemOrderByWithRelationInputSchema: z.ZodType<Prisma.CollectionItemOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      comicId: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      issueNumber: z.lazy(() => SortOrderSchema).optional(),
      userId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      tradeOfferId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      TradeOffer: z
        .lazy(() => TradeOfferOrderByWithRelationInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemOrderByWithRelationInputSchema;
