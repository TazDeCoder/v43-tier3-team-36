import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TradeOfferSelectSchema } from '../inputTypeSchemas/TradeOfferSelectSchema';
import { TradeOfferIncludeSchema } from '../inputTypeSchemas/TradeOfferIncludeSchema';

export const TradeOfferArgsSchema: z.ZodType<Prisma.TradeOfferArgs> = z
  .object({
    select: z.lazy(() => TradeOfferSelectSchema).optional(),
    include: z.lazy(() => TradeOfferIncludeSchema).optional(),
  })
  .strict();

export default TradeOfferArgsSchema;
