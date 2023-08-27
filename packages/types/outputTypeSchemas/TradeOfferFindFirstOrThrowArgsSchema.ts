import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferIncludeSchema } from '../inputTypeSchemas/TradeOfferIncludeSchema';
import { TradeOfferWhereInputSchema } from '../inputTypeSchemas/TradeOfferWhereInputSchema';
import { TradeOfferOrderByWithRelationInputSchema } from '../inputTypeSchemas/TradeOfferOrderByWithRelationInputSchema';
import { TradeOfferWhereUniqueInputSchema } from '../inputTypeSchemas/TradeOfferWhereUniqueInputSchema';
import { TradeOfferScalarFieldEnumSchema } from '../inputTypeSchemas/TradeOfferScalarFieldEnumSchema';
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

export const TradeOfferFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TradeOfferFindFirstOrThrowArgs> =
  z
    .object({
      select: TradeOfferSelectSchema.optional(),
      include: TradeOfferIncludeSchema.optional(),
      where: TradeOfferWhereInputSchema.optional(),
      orderBy: z
        .union([
          TradeOfferOrderByWithRelationInputSchema.array(),
          TradeOfferOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TradeOfferWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          TradeOfferScalarFieldEnumSchema,
          TradeOfferScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default TradeOfferFindFirstOrThrowArgsSchema;
