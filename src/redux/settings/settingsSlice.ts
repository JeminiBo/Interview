import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type Settings = {
  version: number;
};

export interface SettingsState {
  version: number;
  isSettingsLoading: boolean;
}

const initialState: SettingsState = {
  version: 0,
  isSettingsLoading: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSettings.pending, (state) => {
      state.isSettingsLoading = true;
    });
    builder.addCase(getSettings.fulfilled, (state, { payload }) => {
      state.isSettingsLoading = false;
      state.version = payload.version;
    });
  },
});

const getSettings = createAsyncThunk<Settings, void, { state: RootState }>(
  'settings/getSettings',
  async () => {
    const settings: Settings = await firestore()
      .collection('settings')
      .doc('app-settings')
      .get()
      .then((snapshot) => {
        return snapshot.data() as Settings;
      });
    return settings;
  },
);

export { getSettings };

export default settingsSlice.reducer;
