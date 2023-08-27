import 'dotenv/config';
import type { Request, Response } from 'express';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import YAML from 'yaml';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import createError from 'http-errors';

import {
  IS_DEVELOPMENT,
  DEV_ORIGIN,
  PROD_ORIGIN,
  SESSION_SECRET,
  PORT,
} from './config/constants';
import { passportLocal, passportSessions } from './passport';
import routes from './routes';

const app = express();

// Setup server logging
if (IS_DEVELOPMENT) {
  app.use(morgan('dev'));
}

// Generate Swagger UI docs
const file = fs.readFileSync('./docs/swagger.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Setup CORS (+ handling requests)
app.use(
  cors({
    origin: IS_DEVELOPMENT ? DEV_ORIGIN : PROD_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup session-based authentication
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
passportSessions();
passportLocal();

// Setup API routes
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Custom Error handler
app.use((err: Error, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = IS_DEVELOPMENT ? err : {};

  // render the error page
  // @ts-ignore
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
