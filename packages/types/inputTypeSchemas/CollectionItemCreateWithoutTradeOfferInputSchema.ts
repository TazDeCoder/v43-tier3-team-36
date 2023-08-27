import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCollectionInputSchema } from './UserCreateNestedOneWithoutCollectionInputSchema';

export const CollectionItemCreateWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemCreateWithoutTradeOfferInput> =
  z
    .object({
      id: z.string().optional(),
      comicId: z.number(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number(),
      user: z
        .lazy(() => UserCreateNestedOneWithoutCollectionInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemCreateWithoutTradeOfferInputSchema;
