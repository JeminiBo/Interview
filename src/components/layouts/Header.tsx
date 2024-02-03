import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../assets/colors';
import BurgerIcon from '../../assets/icons/burger.svg';
import QuizIcon from '../../assets/icons/quiz.svg';

interface Props {
  title: string;
  leftAction: () => void;
  rightAction: () => void;
}

const Header = ({ title, leftAction, rightAction }: Props) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={leftAction} activeOpacity={0.8}>
        <BurgerIcon width={30} height={30} />
      </TouchableOpacity>
      <Text style={styles.title} adjustsFontSizeToFit>
        {title}
      </Text>
      <TouchableOpacity onPress={rightAction} activeOpacity={0.8}>
        <QuizIcon width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
    maxWidth: '70%',
  },
});

export { Header };
