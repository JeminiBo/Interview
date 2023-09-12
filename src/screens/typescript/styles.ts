import { StyleSheet } from 'react-native';

import { COLORS } from '../../assets/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  listContent: {
    gap: 20,
    paddingHorizontal: 16,
    marginTop: 20,
    paddingBottom: 40,
  },
});

export { styles };
