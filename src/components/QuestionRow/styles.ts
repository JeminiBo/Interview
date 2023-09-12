import { StyleSheet } from 'react-native';

import { COLORS } from '../../assets/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    overflow: 'hidden',
  },
  titleWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    maxWidth: '85%',
  },
  absoluteContentWrapper: { position: 'absolute', top: 0, left: 0 },
  contentWrapper: {
    flexDirection: 'column',
    gap: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: '100%',
  },
  description: { color: COLORS.white, fontSize: 16 },
  image: { width: '100%', height: '100%' },
});

export { styles };
