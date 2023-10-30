import { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTopicQuestions } from '../../redux/topicsQuestions/topicsQuestionsSlice';

type Props = {
  route: any;
};

const TopicScreen = ({ route }: Props) => {
  const { topicKey } = route.params;
  const { topicsQuestions, isTopicQuestionsLoading } = useAppSelector(
    (state) => state.topicsQuestions,
  );
  const dispatch = useAppDispatch();
  const topic = topicsQuestions?.[topicKey];

  useEffect(() => {
    if (topic?.questions?.length === 0 || !topic) {
      dispatch(getTopicQuestions(topicKey));
    }
  }, [topic]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={topic?.questions}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `${topicKey}_${index}`}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={
          isTopicQuestionsLoading ? <ActivityIndicator /> : null
        }
      />
    </View>
  );
};

export { TopicScreen };
