import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  version: number;
}

const initialState: SettingsState = {
  version: 0,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setVersion: (state, action: PayloadAction<{ version: number }>) => {
      state.version = action.payload.version;
    },
  },
});

export const { setVersion } = settingsSlice.actions;

export default settingsSlice.reducer;
