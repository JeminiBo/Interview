import { StyleSheet } from 'react-native';

import { COLORS } from '../../assets/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    marginTop: 20,
  },
});

export { styles };
