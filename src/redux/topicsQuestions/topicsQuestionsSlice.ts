import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type TopicQuestions = {
  title: string;
  questions: { question: string; answer: string }[];
};

export interface TopicsQuestionsState {
  topicsQuestions: {
    [key: string]: TopicQuestions;
  };
  isTopicQuestionsLoading: boolean;
}

const initTopicsQuestions = {
  javascript: { title: 'javascript', questions: [] },
  typescript: { title: 'typescript', questions: [] },
  react: { title: 'react', questions: [] },
  'react-native': { title: 'react-native', questions: [] },
  redux: { title: 'redux', questions: [] },
};

const initialState: TopicsQuestionsState = {
  topicsQuestions: initTopicsQuestions,
  isTopicQuestionsLoading: false,
};

export const topicsQuestionsSlice = createSlice({
  name: 'topicsQuestions',
  initialState,
  reducers: {
    clearTopicsQuestions: (state) => {
      state.topicsQuestions = initTopicsQuestions;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTopicQuestions.pending, (state) => {
      state.isTopicQuestionsLoading = true;
    });
    builder.addCase(getTopicQuestions.fulfilled, (state, { payload }) => {
      state.isTopicQuestionsLoading = false;
      state.topicsQuestions[payload.title.toLowerCase()] = payload;
    });
    builder.addCase(getTopicQuestions.rejected, (state) => {
      state.isTopicQuestionsLoading = false;
    });
  },
});

const getTopicQuestions = createAsyncThunk<
  TopicQuestions,
  string,
  { state: RootState }
>('topicsQuestions/getTopicQuestions', async (topicName: string) => {
  const topic: TopicQuestions = await firestore()
    .collection('topicsQuestions')
    .doc(topicName.toLowerCase())
    .get()
    .then((snapshot) => {
      return snapshot.data() as TopicQuestions;
    });
  return topic;
});

export { getTopicQuestions };

export const { clearTopicsQuestions } = topicsQuestionsSlice.actions;

export default topicsQuestionsSlice.reducer;
