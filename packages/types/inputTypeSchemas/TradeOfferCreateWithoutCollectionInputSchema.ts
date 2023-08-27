import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { UserCreateNestedOneWithoutTradeOffersInputSchema } from './UserCreateNestedOneWithoutTradeOffersInputSchema';
import { TradeRequestCreateNestedManyWithoutTradeOfferInputSchema } from './TradeRequestCreateNestedManyWithoutTradeOfferInputSchema';

export const TradeOfferCreateWithoutCollectionInputSchema: z.ZodType<Prisma.TradeOfferCreateWithoutCollectionInput> =
  z
    .object({
      id: z.string().optional(),
      type: z.lazy(() => TradeOfferTypeSchema),
      status: z.lazy(() => TradeOfferStatusSchema).optional(),
      price: z.number().optional().nullable(),
      phoneNumber: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      wantedComicId: z.number().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.lazy(() => UserCreateNestedOneWithoutTradeOffersInputSchema),
      TradeRequests: z
        .lazy(() => TradeRequestCreateNestedManyWithoutTradeOfferInputSchema)
        .optional(),
    })
    .strict();

export default TradeOfferCreateWithoutCollectionInputSchema;
