import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      password: z.string(),
      username: z.string(),
      profileImage: z.string().optional().nullable(),
      city: z.string(),
      country: z.string(),
      bannerImage: z.string(),
    })
    .strict();

export default UserCreateManyInputSchema;
