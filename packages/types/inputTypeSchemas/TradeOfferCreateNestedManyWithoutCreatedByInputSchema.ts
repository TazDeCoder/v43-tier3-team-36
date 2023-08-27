import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateWithoutCreatedByInputSchema } from './TradeOfferCreateWithoutCreatedByInputSchema';
import { TradeOfferUncheckedCreateWithoutCreatedByInputSchema } from './TradeOfferUncheckedCreateWithoutCreatedByInputSchema';
import { TradeOfferCreateOrConnectWithoutCreatedByInputSchema } from './TradeOfferCreateOrConnectWithoutCreatedByInputSchema';
import { TradeOfferCreateManyCreatedByInputEnvelopeSchema } from './TradeOfferCreateManyCreatedByInputEnvelopeSchema';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';

export const TradeOfferCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.TradeOfferCreateNestedManyWithoutCreatedByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferCreateWithoutCreatedByInputSchema),
          z.lazy(() => TradeOfferCreateWithoutCreatedByInputSchema).array(),
          z.lazy(() => TradeOfferUncheckedCreateWithoutCreatedByInputSchema),
          z
            .lazy(() => TradeOfferUncheckedCreateWithoutCreatedByInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TradeOfferCreateOrConnectWithoutCreatedByInputSchema),
          z
            .lazy(() => TradeOfferCreateOrConnectWithoutCreatedByInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TradeOfferCreateManyCreatedByInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TradeOfferWhereUniqueInputSchema),
          z.lazy(() => TradeOfferWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default TradeOfferCreateNestedManyWithoutCreatedByInputSchema;
