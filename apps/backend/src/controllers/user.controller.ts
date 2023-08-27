/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
import type { NextFunction, Request, Response } from 'express';
import { hash } from 'bcrypt';
import { faker } from '@faker-js/faker';

import {
  type UserDetails,
  findUserByUsername,
  createUser,
  findUserById,
  findUsersWithComic,
  updateUserDetail,
} from '../services/user.service';
import { viewUserTradeOffers } from '../services/collection.service';
import type { User } from '../passport';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // eslint-disable-next-line operator-linebreak
  const { firstName, username, password, email, lastName, city, country } =
    req.body;

  try {
    const foundUser = await findUserByUsername(username);

    if (foundUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await hash(password, 10);
    const bannerImage = faker.image.abstract(1290, 300);
    const newUser = {
      firstName,
      lastName,
      username,
      password: hashedPassword,
      email,
      city,
      country,
      bannerImage,
    };

    const createdUser = await createUser(newUser);

    req.login(createdUser, (err) => {
      if (err) {
        return next(err);
      }

      return res.status(200).json({ message: 'You have been registered!' });
    });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Something went wrong!';

    return res.status(400).json({ message: errMsg });
  }
};

export const logout = async (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      // eslint-disable-next-line operator-linebreak
      const errMsg =
        err instanceof Error ? err.message : 'Something went wrong!';

      return res.status(400).json({ message: errMsg });
    }

    return res.status(200).json({ message: 'Logout successful' });
  });
};

// Update user details/Profile
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.user as User;
  const { password, ...updatedUserDetails } = req.body;

  const dataToUpdate: Partial<UserDetails> = updatedUserDetails;

  if (password) {
    const hashedPassword = await hash(password, 10);
    dataToUpdate.password = hashedPassword;
  }

  try {
    const updatedUser = await updateUserDetail(id, dataToUpdate);

    return res.status(200).json({
      message: 'user profile successfully updated',
      data: { updatedUser },
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const currentUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.user as User;
    const user = await findUserById(id);
    const userTradeOffers = await viewUserTradeOffers(id);

    return res.status(200).json({
      user: {
        userId: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        username: user?.username,
        profileImage: user?.profileImage,
        city: user?.city,
        country: user?.country,
        bannerImage: user?.bannerImage,
        collection: user?.collection.map((item: any) => ({
          id: item.id,
          comicId: item.comicId,
          title: item.title,
          imageUrl: item.imageUrl,
          issueNumber: item.issueNumber,
        })),
        tradeOfferDetail: userTradeOffers?.map((tradeOffer: any) => ({
          tradeOfferId: tradeOffer.id,
          type: tradeOffer.type,
          status: tradeOffer.status,
          message: tradeOffer.message,
          price: tradeOffer.price,
          createdAt: tradeOffer.createdAt,
          contactDetails: {
            email: tradeOffer.email,
            phoneNumber: tradeOffer.phoneNumber,
          },
          tradeOfferItems: {
            collectionId: tradeOffer.collection[0]?.id,
            comicId: tradeOffer.collection[0]?.comicId,
            title: tradeOffer.collection[0]?.title,
            imageUrl: tradeOffer.collection[0]?.imageUrl,
            issueNumber: tradeOffer.collection[0]?.issueNumber,
            tradeOfferId: tradeOffer.collection[0]?.tradeOfferId,
          },
        })),
      },
    });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Something went wrong!';

    return res.status(400).json({ message: errMsg });
  }
};

export const fetchUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as User;
    const user = await findUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userTradeOffers = await viewUserTradeOffers(id);

    return res.status(200).json({
      user: {
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        profileImage: user.profileImage,
        city: user.city,
        country: user.country,
        bannerImage: user.bannerImage,
        collection: user.collection.map((item: any) => ({
          id: item.id,
          comicId: item.comicId,
          title: item.title,
          imageUrl: item.imageUrl,
          issueNumber: item.issueNumber,
        })),
        tradeOfferDetail: userTradeOffers.map((tradeOffer: any) => ({
          tradeOfferId: tradeOffer.id,
          type: tradeOffer.type,
          status: tradeOffer.status,
          message: tradeOffer.message,
          price: tradeOffer.price,
          createdAt: tradeOffer.createdAt,
          contactDetails: {
            email: tradeOffer.email,
            phoneNumber: tradeOffer.phoneNumber,
          },
          tradeOfferItems: {
            collectionId: tradeOffer.collection[0].id,
            comicId: tradeOffer.collection[0].comicId,
            title: tradeOffer.collection[0].title,
            imageUrl: tradeOffer.collection[0].imageUrl,
            issueNumber: tradeOffer.collection[0].issueNumber,
            tradeOfferId: tradeOffer.collection[0].tradeOfferId,
          },
        })),
      },
    });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'Something went wrong!';

    return res.status(400).json({ message: errMsg });
  }
};

export const getUsersWithComicId = async (req: Request, res: Response) => {
  const { comicId } = req.params;
  const usersWithComic = await findUsersWithComic(Number(comicId));

  res.status(200).send({ username: usersWithComic } || []);
};
