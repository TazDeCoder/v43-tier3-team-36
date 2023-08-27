import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CollectionItemUncheckedCreateWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemUncheckedCreateWithoutTradeOfferInput> =
  z
    .object({
      id: z.string().optional(),
      comicId: z.number(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number(),
      userId: z.string().optional().nullable(),
    })
    .strict();

export default CollectionItemUncheckedCreateWithoutTradeOfferInputSchema;
