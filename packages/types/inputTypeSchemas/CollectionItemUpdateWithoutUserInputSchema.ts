import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TradeOfferUpdateOneWithoutCollectionNestedInputSchema } from './TradeOfferUpdateOneWithoutCollectionNestedInputSchema';

export const CollectionItemUpdateWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemUpdateWithoutUserInput> =
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
      TradeOffer: z
        .lazy(() => TradeOfferUpdateOneWithoutCollectionNestedInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemUpdateWithoutUserInputSchema;
