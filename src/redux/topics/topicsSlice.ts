import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type Topic = {
  title: string;
  questions: { question: string; answer: string }[];
};

export interface TopicsState {
  topics: {
    [key: string]: Topic;
  };
  isTopicLoading: boolean;
}

const initTopics = {
  javascript: { title: 'javascript', questions: [] },
  typescript: { title: 'typescript', questions: [] },
  react: { title: 'react', questions: [] },
  'react-native': { title: 'react-native', questions: [] },
};

const initialState: TopicsState = {
  topics: initTopics,
  isTopicLoading: false,
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    clearTopics: (state) => {
      state.topics = initTopics;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTopic.pending, (state) => {
      state.isTopicLoading = true;
    });
    builder.addCase(getTopic.fulfilled, (state, { payload }) => {
      state.isTopicLoading = false;
      state.topics[payload.title.toLowerCase()] = payload;
    });
  },
});

const getTopic = createAsyncThunk<Topic, string, { state: RootState }>(
  'topics/getTopic',
  async (topicName: string) => {
    const topic: Topic = await firestore()
      .collection('topics')
      .doc(topicName.toLowerCase())
      .get()
      .then((snapshot) => {
        return snapshot.data() as Topic;
      });
    return topic;
  },
);

export { getTopic };

export const { clearTopics } = topicsSlice.actions;

export default topicsSlice.reducer;
