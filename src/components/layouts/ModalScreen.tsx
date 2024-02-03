
import React, { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';

const ModalScreen = ({ children }: PropsWithChildren) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export { ModalScreen };
