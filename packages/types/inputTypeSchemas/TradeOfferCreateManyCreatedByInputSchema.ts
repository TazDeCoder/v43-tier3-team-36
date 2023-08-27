import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';

export const TradeOfferCreateManyCreatedByInputSchema: z.ZodType<Prisma.TradeOfferCreateManyCreatedByInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      type: z.lazy(() => TradeOfferTypeSchema),
      status: z.lazy(() => TradeOfferStatusSchema).optional(),
      price: z.number().optional().nullable(),
      phoneNumber: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      wantedComicId: z.number().int().optional().nullable(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export default TradeOfferCreateManyCreatedByInputSchema;
