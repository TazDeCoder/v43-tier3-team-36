import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestIncludeSchema } from '../inputTypeSchemas/TradeRequestIncludeSchema';
import { TradeRequestWhereUniqueInputSchema } from '../inputTypeSchemas/TradeRequestWhereUniqueInputSchema';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { TradeOfferArgsSchema } from '../outputTypeSchemas/TradeOfferArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const TradeRequestDeleteArgsSchema: z.ZodType<Prisma.TradeRequestDeleteArgs> =
  z
    .object({
      select: TradeRequestSelectSchema.optional(),
      include: TradeRequestIncludeSchema.optional(),
      where: TradeRequestWhereUniqueInputSchema,
    })
    .strict();

export default TradeRequestDeleteArgsSchema;
