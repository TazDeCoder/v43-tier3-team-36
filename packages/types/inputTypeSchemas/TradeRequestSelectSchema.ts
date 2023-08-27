import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { TradeOfferArgsSchema } from '../outputTypeSchemas/TradeOfferArgsSchema';

export const TradeRequestSelectSchema: z.ZodType<Prisma.TradeRequestSelect> = z
  .object({
    id: z.boolean().optional(),
    receiverId: z.boolean().optional(),
    tradeOfferId: z.boolean().optional(),
    receiverComicId: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    receiver: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    TradeOffer: z
      .union([z.boolean(), z.lazy(() => TradeOfferArgsSchema)])
      .optional(),
  })
  .strict();

export default TradeRequestSelectSchema;
