import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferUpdateManyMutationInputSchema } from '../inputTypeSchemas/TradeOfferUpdateManyMutationInputSchema';
import { TradeOfferUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TradeOfferUncheckedUpdateManyInputSchema';
import { TradeOfferWhereInputSchema } from '../inputTypeSchemas/TradeOfferWhereInputSchema';

export const TradeOfferUpdateManyArgsSchema: z.ZodType<Prisma.TradeOfferUpdateManyArgs> =
  z
    .object({
      data: z.union([
        TradeOfferUpdateManyMutationInputSchema,
        TradeOfferUncheckedUpdateManyInputSchema,
      ]),
      where: TradeOfferWhereInputSchema.optional(),
    })
    .strict();

export default TradeOfferUpdateManyArgsSchema;
