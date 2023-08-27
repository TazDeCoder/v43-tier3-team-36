import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { TradeOfferArgsSchema } from '../outputTypeSchemas/TradeOfferArgsSchema';

export const TradeRequestIncludeSchema: z.ZodType<Prisma.TradeRequestInclude> =
  z
    .object({
      receiver: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
      TradeOffer: z
        .union([z.boolean(), z.lazy(() => TradeOfferArgsSchema)])
        .optional(),
    })
    .strict();

export default TradeRequestIncludeSchema;
