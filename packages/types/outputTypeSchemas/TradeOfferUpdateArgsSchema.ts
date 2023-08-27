import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferIncludeSchema } from '../inputTypeSchemas/TradeOfferIncludeSchema';
import { TradeOfferUpdateInputSchema } from '../inputTypeSchemas/TradeOfferUpdateInputSchema';
import { TradeOfferUncheckedUpdateInputSchema } from '../inputTypeSchemas/TradeOfferUncheckedUpdateInputSchema';
import { TradeOfferWhereUniqueInputSchema } from '../inputTypeSchemas/TradeOfferWhereUniqueInputSchema';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { CollectionItemFindManyArgsSchema } from '../outputTypeSchemas/CollectionItemFindManyArgsSchema';
import { TradeRequestFindManyArgsSchema } from '../outputTypeSchemas/TradeRequestFindManyArgsSchema';
import { TradeOfferCountOutputTypeArgsSchema } from '../outputTypeSchemas/TradeOfferCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TradeOfferSelectSchema: z.ZodType<Prisma.TradeOfferSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    createdById: z.boolean().optional(),
    price: z.boolean().optional(),
    phoneNumber: z.boolean().optional(),
    email: z.boolean().optional(),
    message: z.boolean().optional(),
    wantedComicId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    collection: z
      .union([z.boolean(), z.lazy(() => CollectionItemFindManyArgsSchema)])
      .optional(),
    TradeRequests: z
      .union([z.boolean(), z.lazy(() => TradeRequestFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TradeOfferCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const TradeOfferUpdateArgsSchema: z.ZodType<Prisma.TradeOfferUpdateArgs> =
  z
    .object({
      select: TradeOfferSelectSchema.optional(),
      include: TradeOfferIncludeSchema.optional(),
      data: z.union([
        TradeOfferUpdateInputSchema,
        TradeOfferUncheckedUpdateInputSchema,
      ]),
      where: TradeOfferWhereUniqueInputSchema,
    })
    .strict();

export default TradeOfferUpdateArgsSchema;
