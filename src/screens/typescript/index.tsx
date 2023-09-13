import { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { styles } from './styles';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const TypeScriptScreen = () => {
  const {
    topics: { typescript: typescriptTopic },
    isTopicLoading,
  } = useAppSelector((state) => state.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typescriptTopic.questions.length === 0) {
      dispatch(getTopic('typescript'));
    }
  }, [typescriptTopic]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={typescriptTopic.questions}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `ts_${index}`}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={isTopicLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export { TypeScriptScreen };
