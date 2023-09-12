import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { QUESTIONS_DATA } from './questions';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const JavaScriptScreen = () => {
  const { javascript: javascriptTopic } = useAppSelector(
    (state) => state.topics.topics,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (javascriptTopic.questions.length === 0) {
      dispatch(getTopic('javascript'));
    }
  }, [javascriptTopic]);
  
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={QUESTIONS_DATA}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `js_${index}`}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export { JavaScriptScreen };
