import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { TradeOfferArgsSchema } from '../outputTypeSchemas/TradeOfferArgsSchema';

export const CollectionItemSelectSchema: z.ZodType<Prisma.CollectionItemSelect> =
  z
    .object({
      id: z.boolean().optional(),
      comicId: z.boolean().optional(),
      title: z.boolean().optional(),
      imageUrl: z.boolean().optional(),
      issueNumber: z.boolean().optional(),
      userId: z.boolean().optional(),
      tradeOfferId: z.boolean().optional(),
      user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
      TradeOffer: z
        .union([z.boolean(), z.lazy(() => TradeOfferArgsSchema)])
        .optional(),
    })
    .strict();

export default CollectionItemSelectSchema;
