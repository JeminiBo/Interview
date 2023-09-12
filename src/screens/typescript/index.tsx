import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { QUESTIONS_DATA } from './questions';
import { styles } from './styles';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const TypeScriptScreen = () => {
  const { typescript: typescriptTopic } = useAppSelector(
    (state) => state.topics.topics,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typescriptTopic.questions.length === 0) {
      dispatch(getTopic('typescript'));
    }
  }, [typescriptTopic]);
  
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={QUESTIONS_DATA}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `ts_${index}`}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export { TypeScriptScreen };
