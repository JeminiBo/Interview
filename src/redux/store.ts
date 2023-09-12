import { configureStore } from '@reduxjs/toolkit';
import TopicsReducer from './topics/topicsSlice';
import SettingsReducer from './settings/settingsSlice';

export const store = configureStore({
  reducer: {
    topics: TopicsReducer,
    settings: SettingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
