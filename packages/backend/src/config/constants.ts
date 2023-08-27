import 'dotenv/config';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const DATABASE_URL = process.env.DATABASE_URL || '';
export const PORT = process.env.PORT || 3000;
export const SESSION_SECRET = process.env.SESSION_SECRET || '';
export const DEV_ORIGIN = process.env.DEV_ORIGIN || '';
export const PROD_ORIGIN = process.env.PROD_ORIGIN || '';
