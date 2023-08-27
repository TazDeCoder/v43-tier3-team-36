import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      profileImage: z.lazy(() => SortOrderSchema).optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      country: z.lazy(() => SortOrderSchema).optional(),
      bannerImage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default UserMinOrderByAggregateInputSchema;
