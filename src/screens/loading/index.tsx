import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const LoadingScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  );
};

export { LoadingScreen };
