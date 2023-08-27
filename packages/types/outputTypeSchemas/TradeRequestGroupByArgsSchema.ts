import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereInputSchema } from '../inputTypeSchemas/TradeRequestWhereInputSchema';
import { TradeRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TradeRequestOrderByWithAggregationInputSchema';
import { TradeRequestScalarFieldEnumSchema } from '../inputTypeSchemas/TradeRequestScalarFieldEnumSchema';
import { TradeRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TradeRequestScalarWhereWithAggregatesInputSchema';

export const TradeRequestGroupByArgsSchema: z.ZodType<Prisma.TradeRequestGroupByArgs> =
  z
    .object({
      where: TradeRequestWhereInputSchema.optional(),
      orderBy: z
        .union([
          TradeRequestOrderByWithAggregationInputSchema.array(),
          TradeRequestOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: TradeRequestScalarFieldEnumSchema.array(),
      having: TradeRequestScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default TradeRequestGroupByArgsSchema;
