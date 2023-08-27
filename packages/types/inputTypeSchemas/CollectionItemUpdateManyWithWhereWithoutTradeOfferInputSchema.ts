import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemScalarWhereInputSchema } from './CollectionItemScalarWhereInputSchema';
import { CollectionItemUpdateManyMutationInputSchema } from './CollectionItemUpdateManyMutationInputSchema';
import { CollectionItemUncheckedUpdateManyWithoutTradeOfferInputSchema } from './CollectionItemUncheckedUpdateManyWithoutTradeOfferInputSchema';

export const CollectionItemUpdateManyWithWhereWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemUpdateManyWithWhereWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => CollectionItemUpdateManyMutationInputSchema),
        z.lazy(
          () => CollectionItemUncheckedUpdateManyWithoutTradeOfferInputSchema,
        ),
      ]),
    })
    .strict();

export default CollectionItemUpdateManyWithWhereWithoutTradeOfferInputSchema;
