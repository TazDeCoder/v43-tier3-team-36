import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/CollectionItemUpdateManyMutationInputSchema';
import { CollectionItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CollectionItemUncheckedUpdateManyInputSchema';
import { CollectionItemWhereInputSchema } from '../inputTypeSchemas/CollectionItemWhereInputSchema';

export const CollectionItemUpdateManyArgsSchema: z.ZodType<Prisma.CollectionItemUpdateManyArgs> =
  z
    .object({
      data: z.union([
        CollectionItemUpdateManyMutationInputSchema,
        CollectionItemUncheckedUpdateManyInputSchema,
      ]),
      where: CollectionItemWhereInputSchema.optional(),
    })
    .strict();

export default CollectionItemUpdateManyArgsSchema;
