import { View, FlatList } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { QUESTIONS_DATA } from './questions';
import { styles } from './styles';

const TypeScriptScreen = () => {
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
