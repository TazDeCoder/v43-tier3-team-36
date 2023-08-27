import { create } from 'zustand';

import { type AuthSlice, createAuthSlice } from './authSlice';
import { type AlertSlice, createAlertSlice } from './alertSlice';

const useBoundStore = create<AlertSlice & AuthSlice>()((...a) => ({
  ...createAuthSlice(...a),
  ...createAlertSlice(...a),
}));

export default useBoundStore;
