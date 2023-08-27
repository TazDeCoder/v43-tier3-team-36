import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemUpdateWithoutUserInputSchema } from './CollectionItemUpdateWithoutUserInputSchema';
import { CollectionItemUncheckedUpdateWithoutUserInputSchema } from './CollectionItemUncheckedUpdateWithoutUserInputSchema';
import { CollectionItemCreateWithoutUserInputSchema } from './CollectionItemCreateWithoutUserInputSchema';
import { CollectionItemUncheckedCreateWithoutUserInputSchema } from './CollectionItemUncheckedCreateWithoutUserInputSchema';

export const CollectionItemUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => CollectionItemUpdateWithoutUserInputSchema),
        z.lazy(() => CollectionItemUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CollectionItemCreateWithoutUserInputSchema),
        z.lazy(() => CollectionItemUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default CollectionItemUpsertWithWhereUniqueWithoutUserInputSchema;
