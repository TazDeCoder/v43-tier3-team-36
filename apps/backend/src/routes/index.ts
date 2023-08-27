import { Router } from 'express';

import APIV1 from './v1';

const router = Router();

router.use('/v1', APIV1);

router.get('/health', (req, res, next) => {
  res.send('Health is ok!');
});

export default router;
