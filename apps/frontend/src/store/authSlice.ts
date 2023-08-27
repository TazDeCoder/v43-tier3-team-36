import type { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

import { type SignupOptions, type LoginOptions, signup, login } from '@/api';

type CustomResponseObject = {
  ok: boolean;
  message?: string;
};

const initialState = {
  isLoggedIn: false,
};

export type AuthSlice = {
  isLoggedIn: boolean;
  signup: (newUserCredentials: SignupOptions) => Promise<CustomResponseObject>;
  login: (
    existingUserCredentials: LoginOptions,
  ) => Promise<CustomResponseObject>;
  logout: () => void;
};

export const createAuthSlice: StateCreator<
  AuthSlice,
  [],
  [['zustand/persist', Pick<AuthSlice, 'isLoggedIn'>]],
  AuthSlice
> = persist(
  (set) => ({
    ...initialState,
    signup: (userCredentials) =>
      new Promise(async (resolve) => {
        try {
          const { message } = await signup(userCredentials);
          set(() => ({ isLoggedIn: true }));
          resolve({ ok: true, message });
        } catch (err) {
          const errMsg =
            err instanceof Error ? err.message : 'Something went wrong!';
          resolve({
            ok: false,
            message: errMsg,
          });
        }
      }),
    login: (userCredentials) =>
      new Promise(async (resolve) => {
        try {
          const { message } = await login(userCredentials);
          set(() => ({ isLoggedIn: true }));
          resolve({ ok: true, message });
        } catch (err) {
          const errMsg =
            err instanceof Error ? err.message : 'Something went wrong!';
          resolve({
            ok: false,
            message: errMsg,
          });
        }
      }),
    logout: () => {
      set(() => initialState);
    },
  }),
  {
    name: 'sharemyrecipes:auth',
  },
);
