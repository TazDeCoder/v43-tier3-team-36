import { Router } from 'express';

import {
  addCollectionItemToUser,
  createTradeOffers,
  createTradeRequest,
  deleteTradeOffer,
  editByDeletingUserComic,
  tradeComics,
  viewComicBookCollector,
  viewTradeOffers,
  pushNotifications,
  updatePushNotifications,
  queryCollectorsByUsernameAndCountry,
} from '../../controllers/collection.controller';
import { isLoggedIn, validateSchema } from '../../middlewares';
import {
  assignComicSchema,
  tradeOfferSchema,
  tradeRequestSchema,
} from '../../schemas/zodSchemas';

const collectionRouter = Router();

// GET Methods
collectionRouter.get(
  '/collectors',
  isLoggedIn,
  queryCollectorsByUsernameAndCountry,
);
collectionRouter.get(
  '/collections/:userId',
  isLoggedIn,
  viewComicBookCollector,
);
collectionRouter.get('/trade-offers', isLoggedIn, viewTradeOffers);
collectionRouter.get('/notifications', isLoggedIn, pushNotifications);
// POST Methods
collectionRouter.post(
  '/collections',
  isLoggedIn,
  validateSchema(assignComicSchema),
  addCollectionItemToUser,
);
collectionRouter.post(
  '/trade-offers',
  isLoggedIn,
  validateSchema(tradeOfferSchema),
  createTradeOffers,
);
collectionRouter.post(
  '/trade-requests',
  isLoggedIn,
  validateSchema(tradeRequestSchema),
  createTradeRequest,
);
// DELETE Methods
collectionRouter.delete(
  '/collections/:comicId',
  isLoggedIn,
  editByDeletingUserComic,
);
collectionRouter.delete(
  '/trade-offers/:tradeOfferId',
  isLoggedIn,
  deleteTradeOffer,
);
// PATCH Methods
collectionRouter.patch('/trades/:tradeRequestId', isLoggedIn, tradeComics);
collectionRouter.patch(
  '/notifications/:notificationId',
  isLoggedIn,
  updatePushNotifications,
);

export default collectionRouter;
