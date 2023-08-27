import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const TradeOfferCountOutputTypeSelectSchema: z.ZodType<Prisma.TradeOfferCountOutputTypeSelect> =
  z
    .object({
      collection: z.boolean().optional(),
      TradeRequests: z.boolean().optional(),
    })
    .strict();

export default TradeOfferCountOutputTypeSelectSchema;
