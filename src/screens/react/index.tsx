import { View, FlatList } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { QUESTIONS_DATA } from './questions';
import { styles } from './styles';

const ReactScreen = () => {
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
