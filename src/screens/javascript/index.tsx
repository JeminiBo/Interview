import { View, FlatList } from 'react-native';
import { QuestionRow } from '../../components/QuestionRow';
import { QUESTIONS_DATA } from './questions';
import { styles } from './styles';

const JavaScriptScreen = () => {
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
