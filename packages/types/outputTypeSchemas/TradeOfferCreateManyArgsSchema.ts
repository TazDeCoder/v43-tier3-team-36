import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateManyInputSchema } from '../inputTypeSchemas/TradeOfferCreateManyInputSchema';

export const TradeOfferCreateManyArgsSchema: z.ZodType<Prisma.TradeOfferCreateManyArgs> =
  z
    .object({
      data: z.union([
        TradeOfferCreateManyInputSchema,
        TradeOfferCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default TradeOfferCreateManyArgsSchema;
