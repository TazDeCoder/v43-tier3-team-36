import type { StateCreator } from 'zustand';

const ALERT_AUTO_DISMISS = 3000;

export type AlertType = 'default' | 'info' | 'error' | 'success';

export type Alert = {
  type?: AlertType;
  message?: string;
};

export type AlertSlice = {
  alert: Alert;
  setAlert: (alert: Alert, dismiss?: number) => void;
  resetAlert: () => void;
};

const initialState = {
  type: undefined,
  message: undefined,
};

export const createAlertSlice: StateCreator<AlertSlice, [], [], AlertSlice> = (
  set,
  get,
) => ({
  alert: initialState,
  setAlert: (newAlert, dismiss = ALERT_AUTO_DISMISS) => {
    set(() => ({ alert: newAlert }));
    setTimeout(() => {
      get().resetAlert();
    }, dismiss);
  },
  resetAlert: () => set(() => ({ alert: initialState })),
});
