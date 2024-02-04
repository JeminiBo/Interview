import { COLORS } from '../../assets/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  listContent: { paddingHorizontal: 20, paddingVertical: 20 },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  topicsProgress: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 40,
    textAlign: 'center',
  },
  topicsProgressRow: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    gap: 20,
    justifyContent: 'space-between',
  },
  topicsProgressTitle: {
    fontSize: 16,
    color: COLORS.white,
  },
  topics: {
    marginTop: 20,
    gap: 12,
  },
});

export { styles };
