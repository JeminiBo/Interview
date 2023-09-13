import { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const ReactNativeScreen = () => {
  const { topics, isTopicLoading } = useAppSelector((state) => state.topics);
  const dispatch = useAppDispatch();
  const reactNativeTopic = topics['react-native'];

  useEffect(() => {
    if (reactNativeTopic.questions.length === 0) {
      dispatch(getTopic('react-native'));
    }
  }, [reactNativeTopic]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={reactNativeTopic.questions}
        renderItem={({ item }) => <QuestionRow {...item} />}
        keyExtractor={(_, index) => `js_${index}`}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={isTopicLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export { ReactNativeScreen };
