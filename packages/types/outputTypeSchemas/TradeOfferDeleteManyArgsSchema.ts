import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from '../inputTypeSchemas/TradeOfferWhereInputSchema';

export const TradeOfferDeleteManyArgsSchema: z.ZodType<Prisma.TradeOfferDeleteManyArgs> =
  z
    .object({
      where: TradeOfferWhereInputSchema.optional(),
    })
    .strict();

export default TradeOfferDeleteManyArgsSchema;
