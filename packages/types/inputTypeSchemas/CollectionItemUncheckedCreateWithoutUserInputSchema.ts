import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CollectionItemUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      comicId: z.number(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number(),
      tradeOfferId: z.string().optional().nullable(),
    })
    .strict();

export default CollectionItemUncheckedCreateWithoutUserInputSchema;
