import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { CollectionItemUncheckedCreateNestedManyWithoutTradeOfferInputSchema } from './CollectionItemUncheckedCreateNestedManyWithoutTradeOfferInputSchema';

export const TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema: z.ZodType<Prisma.TradeOfferUncheckedCreateWithoutTradeRequestsInput> =
  z
    .object({
      id: z.string().optional(),
      type: z.lazy(() => TradeOfferTypeSchema),
      status: z.lazy(() => TradeOfferStatusSchema).optional(),
      createdById: z.string(),
      price: z.number().optional().nullable(),
      phoneNumber: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      wantedComicId: z.number().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      collection: z
        .lazy(
          () =>
            CollectionItemUncheckedCreateNestedManyWithoutTradeOfferInputSchema,
        )
        .optional(),
    })
    .strict();

export default TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema;
