import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from '../inputTypeSchemas/TradeOfferWhereInputSchema';
import { TradeOfferOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TradeOfferOrderByWithAggregationInputSchema';
import { TradeOfferScalarFieldEnumSchema } from '../inputTypeSchemas/TradeOfferScalarFieldEnumSchema';
import { TradeOfferScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TradeOfferScalarWhereWithAggregatesInputSchema';

export const TradeOfferGroupByArgsSchema: z.ZodType<Prisma.TradeOfferGroupByArgs> =
  z
    .object({
      where: TradeOfferWhereInputSchema.optional(),
      orderBy: z
        .union([
          TradeOfferOrderByWithAggregationInputSchema.array(),
          TradeOfferOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: TradeOfferScalarFieldEnumSchema.array(),
      having: TradeOfferScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default TradeOfferGroupByArgsSchema;
