import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereInputSchema } from './CollectionItemWhereInputSchema';

export const CollectionItemListRelationFilterSchema: z.ZodType<Prisma.CollectionItemListRelationFilter> =
  z
    .object({
      every: z.lazy(() => CollectionItemWhereInputSchema).optional(),
      some: z.lazy(() => CollectionItemWhereInputSchema).optional(),
      none: z.lazy(() => CollectionItemWhereInputSchema).optional(),
    })
    .strict();

export default CollectionItemListRelationFilterSchema;
