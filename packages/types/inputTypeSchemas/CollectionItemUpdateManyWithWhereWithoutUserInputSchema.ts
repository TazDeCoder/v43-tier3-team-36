import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemScalarWhereInputSchema } from './CollectionItemScalarWhereInputSchema';
import { CollectionItemUpdateManyMutationInputSchema } from './CollectionItemUpdateManyMutationInputSchema';
import { CollectionItemUncheckedUpdateManyWithoutUserInputSchema } from './CollectionItemUncheckedUpdateManyWithoutUserInputSchema';

export const CollectionItemUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => CollectionItemUpdateManyMutationInputSchema),
        z.lazy(() => CollectionItemUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export default CollectionItemUpdateManyWithWhereWithoutUserInputSchema;
