import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalScreen } from '../../components/layouts/ModalScreen';
import { useAppSelector } from '../../hooks/redux';
import CloseIcon from '../../assets/icons/close.svg';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

const QuizChoosing = () => {
  const { topics } = useAppSelector((state) => state.topics);
  const topicsTitles = topics.map((item) => item.title);
  const navigation = useNavigation();
  return (
    <ModalScreen>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Choose quiz topic</Text>
          <TouchableOpacity
            style={styles.closeWrapper}
            activeOpacity={0.9}
            onPress={() => navigation.goBack()}>
            <CloseIcon width={25} height={25} color="white" fill="white" />
          </TouchableOpacity>
        </View>
        {topicsTitles.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.quizButton}
            activeOpacity={0.7}>
            <Text style={styles.quizButtonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ModalScreen>
  );
};

export { QuizChoosing };
