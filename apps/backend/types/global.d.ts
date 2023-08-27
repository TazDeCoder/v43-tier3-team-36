declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'development' | 'production';
      DATABASE_URL?: string;
      PORT?: string;
      SESSION_SECRET?: string;
      DEV_ORIGIN?: string;
      PROD_ORIGIN?: string;
    }
  }
}
