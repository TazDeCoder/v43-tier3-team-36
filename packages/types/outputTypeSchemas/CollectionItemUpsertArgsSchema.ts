import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemIncludeSchema } from '../inputTypeSchemas/CollectionItemIncludeSchema';
import { CollectionItemWhereUniqueInputSchema } from '../inputTypeSchemas/CollectionItemWhereUniqueInputSchema';
import { CollectionItemCreateInputSchema } from '../inputTypeSchemas/CollectionItemCreateInputSchema';
import { CollectionItemUncheckedCreateInputSchema } from '../inputTypeSchemas/CollectionItemUncheckedCreateInputSchema';
import { CollectionItemUpdateInputSchema } from '../inputTypeSchemas/CollectionItemUpdateInputSchema';
import { CollectionItemUncheckedUpdateInputSchema } from '../inputTypeSchemas/CollectionItemUncheckedUpdateInputSchema';
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

export const CollectionItemUpsertArgsSchema: z.ZodType<Prisma.CollectionItemUpsertArgs> =
  z
    .object({
      select: CollectionItemSelectSchema.optional(),
      include: CollectionItemIncludeSchema.optional(),
      where: CollectionItemWhereUniqueInputSchema,
      create: z.union([
        CollectionItemCreateInputSchema,
        CollectionItemUncheckedCreateInputSchema,
      ]),
      update: z.union([
        CollectionItemUpdateInputSchema,
        CollectionItemUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export default CollectionItemUpsertArgsSchema;
