import { z } from 'zod';
import { type Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  z
    .object({
      collection: z.boolean().optional(),
      tradeOffers: z.boolean().optional(),
      TradeRequests: z.boolean().optional(),
      pushNotification: z.boolean().optional(),
    })
    .strict();

export default UserCountOutputTypeSelectSchema;
