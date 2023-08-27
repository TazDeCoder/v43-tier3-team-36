import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutCollectionNestedInputSchema } from './UserUpdateOneWithoutCollectionNestedInputSchema';

export const CollectionItemUpdateWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemUpdateWithoutTradeOfferInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comicId: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      issueNumber: z
        .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneWithoutCollectionNestedInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemUpdateWithoutTradeOfferInputSchema;
