import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { TradeRequestUncheckedCreateNestedManyWithoutTradeOfferInputSchema } from './TradeRequestUncheckedCreateNestedManyWithoutTradeOfferInputSchema';

export const TradeOfferUncheckedCreateWithoutCollectionInputSchema: z.ZodType<Prisma.TradeOfferUncheckedCreateWithoutCollectionInput> =
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
      TradeRequests: z
        .lazy(
          () =>
            TradeRequestUncheckedCreateNestedManyWithoutTradeOfferInputSchema,
        )
        .optional(),
    })
    .strict();

export default TradeOfferUncheckedCreateWithoutCollectionInputSchema;
