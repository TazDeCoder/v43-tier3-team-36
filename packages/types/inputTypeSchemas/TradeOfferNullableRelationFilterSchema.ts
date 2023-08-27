import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';

export const TradeOfferNullableRelationFilterSchema: z.ZodType<Prisma.TradeOfferNullableRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => TradeOfferWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => TradeOfferWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export default TradeOfferNullableRelationFilterSchema;
