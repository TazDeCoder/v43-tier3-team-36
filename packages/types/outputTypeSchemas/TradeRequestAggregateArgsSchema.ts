import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereInputSchema } from '../inputTypeSchemas/TradeRequestWhereInputSchema';
import { TradeRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/TradeRequestOrderByWithRelationInputSchema';
import { TradeRequestWhereUniqueInputSchema } from '../inputTypeSchemas/TradeRequestWhereUniqueInputSchema';

export const TradeRequestAggregateArgsSchema: z.ZodType<Prisma.TradeRequestAggregateArgs> =
  z
    .object({
      where: TradeRequestWhereInputSchema.optional(),
      orderBy: z
        .union([
          TradeRequestOrderByWithRelationInputSchema.array(),
          TradeRequestOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TradeRequestWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default TradeRequestAggregateArgsSchema;
