import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutCollectionNestedInputSchema } from './UserUpdateOneWithoutCollectionNestedInputSchema';
import { TradeOfferUpdateOneWithoutCollectionNestedInputSchema } from './TradeOfferUpdateOneWithoutCollectionNestedInputSchema';

export const CollectionItemUpdateInputSchema: z.ZodType<Prisma.CollectionItemUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comicId: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
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
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneWithoutCollectionNestedInputSchema)
        .optional(),
      TradeOffer: z
        .lazy(() => TradeOfferUpdateOneWithoutCollectionNestedInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemUpdateInputSchema;
