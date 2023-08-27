import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TradeOfferCountOutputTypeSelectSchema } from './TradeOfferCountOutputTypeSelectSchema';

export const TradeOfferCountOutputTypeArgsSchema: z.ZodType<Prisma.TradeOfferCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => TradeOfferCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default TradeOfferCountOutputTypeSelectSchema;
