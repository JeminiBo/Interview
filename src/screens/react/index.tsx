import { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const ReactScreen = () => {
  const {
    topics: { react: reactTopic },
    isTopicLoading,
  } = useAppSelector((state) => state.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reactTopic.questions.length === 0) {
      dispatch(getTopic('react'));
    }
  }, [reactTopic]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={reactTopic.questions}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `react_${index}`}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={isTopicLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export { ReactScreen };
