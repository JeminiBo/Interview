import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: 16,
    padding: 16,
    gap: 16,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
  },
  header: { flexDirection: 'row', alignItems: 'center',justifyContent: 'center', width: '100%' },
  closeWrapper: {
    position: 'absolute',
    right: 0,
    height: 25,
    width: 25,
    bottom: 13
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 5
  },
  quizButton: {
    height: 50,
    backgroundColor: COLORS.main,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizButtonText: {
    fontSize: 16,
    color: COLORS.white,
  },
});

export { styles };
