import { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const ReduxScreen = () => {
  const {
    topics: { redux: reduxTopic },
    isTopicLoading,
  } = useAppSelector((state) => state.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reduxTopic.questions.length === 0) {
      dispatch(getTopic('redux'));
    }
  }, [reduxTopic]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={reduxTopic.questions}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `redux_${index}`}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={isTopicLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export { ReduxScreen };
