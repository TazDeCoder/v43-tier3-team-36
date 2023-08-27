import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TradeOfferOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TradeOfferOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TradeOfferOrderByRelationAggregateInputSchema;
