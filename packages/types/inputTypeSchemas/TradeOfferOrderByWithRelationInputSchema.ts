import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { CollectionItemOrderByRelationAggregateInputSchema } from './CollectionItemOrderByRelationAggregateInputSchema';
import { TradeRequestOrderByRelationAggregateInputSchema } from './TradeRequestOrderByRelationAggregateInputSchema';

export const TradeOfferOrderByWithRelationInputSchema: z.ZodType<Prisma.TradeOfferOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      createdById: z.lazy(() => SortOrderSchema).optional(),
      price: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      phoneNumber: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      message: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      wantedComicId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      collection: z
        .lazy(() => CollectionItemOrderByRelationAggregateInputSchema)
        .optional(),
      TradeRequests: z
        .lazy(() => TradeRequestOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export default TradeOfferOrderByWithRelationInputSchema;
