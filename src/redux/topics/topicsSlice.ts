import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type Topic = {
  title: string;
  key: string;
  id: string;
};

export interface TopicsState {
  topics: Topic[];
  isTopicsLoading: boolean;
}

const initialState: TopicsState = {
  topics: [],
  isTopicsLoading: false,
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    clearTopics: (state) => {
      state.topics = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTopics.pending, (state) => {
      state.isTopicsLoading = true;
    });
    builder.addCase(getTopics.fulfilled, (state, { payload }) => {
      state.isTopicsLoading = false;
      state.topics = payload;
    });
    builder.addCase(getTopics.rejected, (state) => {
      state.isTopicsLoading = false;
    });
  },
});

const getTopics = createAsyncThunk<Topic[], void, { state: RootState }>(
  'topics/getTopicQuestions',
  async () => {
    const topics: Topic[] = await firestore()
      .collection('topics')
      .get()
      .then((snapshot) => {
        const topicsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return topicsData as Topic[];
      });
    return topics;
  },
);

export { getTopics };

export const { clearTopics } = topicsSlice.actions;

export default topicsSlice.reducer;
