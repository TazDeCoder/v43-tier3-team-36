import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemIncludeSchema } from '../inputTypeSchemas/CollectionItemIncludeSchema';
import { CollectionItemWhereInputSchema } from '../inputTypeSchemas/CollectionItemWhereInputSchema';
import { CollectionItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/CollectionItemOrderByWithRelationInputSchema';
import { CollectionItemWhereUniqueInputSchema } from '../inputTypeSchemas/CollectionItemWhereUniqueInputSchema';
import { CollectionItemScalarFieldEnumSchema } from '../inputTypeSchemas/CollectionItemScalarFieldEnumSchema';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { TradeOfferArgsSchema } from '../outputTypeSchemas/TradeOfferArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const CollectionItemFindFirstArgsSchema: z.ZodType<Prisma.CollectionItemFindFirstArgs> =
  z
    .object({
      select: CollectionItemSelectSchema.optional(),
      include: CollectionItemIncludeSchema.optional(),
      where: CollectionItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          CollectionItemOrderByWithRelationInputSchema.array(),
          CollectionItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CollectionItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          CollectionItemScalarFieldEnumSchema,
          CollectionItemScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default CollectionItemFindFirstArgsSchema;
