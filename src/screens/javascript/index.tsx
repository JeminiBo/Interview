import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { QUESTIONS_DATA } from './questions';
import { styles } from './styles';
import { useAppDispatch } from '../../hooks/redux';
import { getTopic } from '../../redux/topics/topicsSlice';

const JavaScriptScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTopic('javascript'));
  }, []);
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
