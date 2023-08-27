import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from '../inputTypeSchemas/TradeOfferWhereInputSchema';
import { TradeOfferOrderByWithRelationInputSchema } from '../inputTypeSchemas/TradeOfferOrderByWithRelationInputSchema';
import { TradeOfferWhereUniqueInputSchema } from '../inputTypeSchemas/TradeOfferWhereUniqueInputSchema';

export const TradeOfferAggregateArgsSchema: z.ZodType<Prisma.TradeOfferAggregateArgs> =
  z
    .object({
      where: TradeOfferWhereInputSchema.optional(),
      orderBy: z
        .union([
          TradeOfferOrderByWithRelationInputSchema.array(),
          TradeOfferOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TradeOfferWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default TradeOfferAggregateArgsSchema;
