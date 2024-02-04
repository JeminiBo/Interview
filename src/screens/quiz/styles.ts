import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: COLORS.secondary, padding: 20 },
  listContent: { flexGrow: 1 },
  page: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  mockRightAction: {
    height: 25,
    width: 25,
  },
  video: {
    height: 300,
    width: '100%',
    borderRadius: 30,
    marginVertical: 30,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  radioButtons: {
    alignItems: 'flex-start',
    gap: 15,
  },
  continueButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.main,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export { styles };
