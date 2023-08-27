import { prisma } from '../lib/prisma';

export type UserDetails = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  city: string;
  country: string;
  bannerImage: string;
  profileImage?: string;
};

export const createUser = (newUser: UserDetails) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  prisma.user.create({
    data: newUser,
  });

export const findUserByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user;
};

export const findUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: { collection: true, tradeOffers: true },
  });

  return user;
};

export const findUsersWithComic = async (comicId: number) => {
  const users = await prisma.collectionItem.findMany({
    where: { comicId },
    include: { user: true },
  });

  const filtered = users.reduce(
    (a: {}[], b: any) => [
      ...a,
      {
        username: b.user?.username,
        location: b.user?.country,
        profileImage: b.user?.profileImage,
      },
    ],
    [],
  );

  return filtered;
};

export const updateUserDetail = async (
  id: string,
  dataToUpdate: Partial<UserDetails>,
) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  prisma.user.update({
    where: { id },
    data: dataToUpdate,
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      username: true,
      profileImage: true,
      city: true,
      country: true,
      bannerImage: true,
    },
  });
