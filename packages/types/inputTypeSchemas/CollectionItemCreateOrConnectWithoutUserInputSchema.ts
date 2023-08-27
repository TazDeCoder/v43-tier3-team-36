import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemCreateWithoutUserInputSchema } from './CollectionItemCreateWithoutUserInputSchema';
import { CollectionItemUncheckedCreateWithoutUserInputSchema } from './CollectionItemUncheckedCreateWithoutUserInputSchema';

export const CollectionItemCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CollectionItemCreateWithoutUserInputSchema),
        z.lazy(() => CollectionItemUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default CollectionItemCreateOrConnectWithoutUserInputSchema;
