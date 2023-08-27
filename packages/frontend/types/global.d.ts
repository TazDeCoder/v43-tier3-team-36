declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MARVEL_PUBLIC_KEY?: string;
      NEXT_PUBLIC_MARVEL_API_URL?: string;
      NEXT_PUBLIC_SERVER_URL?: string;
      NEXT_PUBLIC_PUSHER_APP_KEY?: string;
      NEXT_PUBLIC_PUSHER_APP_CLUSTER?: string;
    }
  }
}

export {};
