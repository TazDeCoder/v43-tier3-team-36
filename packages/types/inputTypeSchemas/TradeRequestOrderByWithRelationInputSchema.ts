import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { TradeOfferOrderByWithRelationInputSchema } from './TradeOfferOrderByWithRelationInputSchema';

export const TradeRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.TradeRequestOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      receiverId: z.lazy(() => SortOrderSchema).optional(),
      tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
      receiverComicId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      receiver: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      TradeOffer: z
        .lazy(() => TradeOfferOrderByWithRelationInputSchema)
        .optional(),
    })
    .strict();

export default TradeRequestOrderByWithRelationInputSchema;
