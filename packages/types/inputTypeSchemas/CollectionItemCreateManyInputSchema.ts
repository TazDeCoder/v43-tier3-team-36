import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CollectionItemCreateManyInputSchema: z.ZodType<Prisma.CollectionItemCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      comicId: z.number().int(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number().int(),
      userId: z.string().optional().nullable(),
      tradeOfferId: z.string().optional().nullable(),
    })
    .strict();

export default CollectionItemCreateManyInputSchema;
