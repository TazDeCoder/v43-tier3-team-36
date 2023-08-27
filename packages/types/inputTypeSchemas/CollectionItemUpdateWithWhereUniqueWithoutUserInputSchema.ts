import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemUpdateWithoutUserInputSchema } from './CollectionItemUpdateWithoutUserInputSchema';
import { CollectionItemUncheckedUpdateWithoutUserInputSchema } from './CollectionItemUncheckedUpdateWithoutUserInputSchema';

export const CollectionItemUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => CollectionItemUpdateWithoutUserInputSchema),
        z.lazy(() => CollectionItemUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default CollectionItemUpdateWithWhereUniqueWithoutUserInputSchema;
