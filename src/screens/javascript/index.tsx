import { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const JavaScriptScreen = () => {
  const {
    topics: { javascript: javascriptTopic },
    isTopicLoading,
  } = useAppSelector((state) => state.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (javascriptTopic.questions.length === 0) {
      dispatch(getTopic('javascript'));
    }
  }, [javascriptTopic]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={javascriptTopic.questions}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `js_${index}`}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={isTopicLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export { JavaScriptScreen };
