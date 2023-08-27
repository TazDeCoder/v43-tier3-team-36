import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { CollectionItemUncheckedCreateNestedManyWithoutTradeOfferInputSchema } from './CollectionItemUncheckedCreateNestedManyWithoutTradeOfferInputSchema';
import { TradeRequestUncheckedCreateNestedManyWithoutTradeOfferInputSchema } from './TradeRequestUncheckedCreateNestedManyWithoutTradeOfferInputSchema';

export const TradeOfferUncheckedCreateInputSchema: z.ZodType<Prisma.TradeOfferUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      type: z.lazy(() => TradeOfferTypeSchema),
      status: z.lazy(() => TradeOfferStatusSchema).optional(),
      createdById: z.string(),
      price: z.number().optional().nullable(),
      phoneNumber: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      wantedComicId: z.number().int().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      collection: z
        .lazy(
          () =>
            CollectionItemUncheckedCreateNestedManyWithoutTradeOfferInputSchema,
        )
        .optional(),
      TradeRequests: z
        .lazy(
          () =>
            TradeRequestUncheckedCreateNestedManyWithoutTradeOfferInputSchema,
        )
        .optional(),
    })
    .strict();

export default TradeOfferUncheckedCreateInputSchema;
