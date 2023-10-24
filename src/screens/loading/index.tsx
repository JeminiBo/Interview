import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles';

const LoadingScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.text}>Checking updates</Text>
    </View>
  );
};

export { LoadingScreen };
