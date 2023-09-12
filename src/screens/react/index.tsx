import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { QUESTIONS_DATA } from './questions';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const ReactScreen = () => {
  const { react: reactTopic } = useAppSelector((state) => state.topics.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reactTopic.questions.length === 0) {
      dispatch(getTopic('react'));
    }
  }, [reactTopic]);
  
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={QUESTIONS_DATA}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `react_${index}`}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export { ReactScreen };
