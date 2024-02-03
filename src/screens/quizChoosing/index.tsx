import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ModalScreen } from '../../components/layouts/ModalScreen';
import { useAppSelector } from '../../hooks/redux';
import CloseIcon from '../../assets/icons/close.svg';
import { styles } from './styles';

const QuizChoosing = ({navigation}) => {
  const { topics } = useAppSelector((state) => state.topics);
  const topicsTitles = topics.map((item) => item.title);
  const [selectedTopic, setSelectedTopic] = useState('');
  const goToQuiz = () => {
    navigation.goBack()
    navigation.navigate('Quiz')
  }
  return (
    <ModalScreen>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {!selectedTopic ? 'Choose quiz topic' : 'Choose your level'}
          </Text>
          <TouchableOpacity
            style={styles.closeWrapper}
            activeOpacity={0.9}
            onPress={() => navigation.goBack()}>
            <CloseIcon width={25} height={25} color="white" fill="white" />
          </TouchableOpacity>
        </View>
        {!selectedTopic &&
          topicsTitles.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.quizButton}
              activeOpacity={0.7}
              onPress={() => {
                setSelectedTopic(item);
              }}>
              <Text style={styles.quizButtonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        {selectedTopic && (
          <>
            <TouchableOpacity onPress={goToQuiz} style={styles.quizButton} activeOpacity={0.7}>
              <Text style={styles.quizButtonText}>Junior</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToQuiz} style={styles.quizButton} activeOpacity={0.7}>
              <Text style={styles.quizButtonText}>Middle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToQuiz} style={styles.quizButton} activeOpacity={0.7}>
              <Text style={styles.quizButtonText}>Senior</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ModalScreen>
  );
};

export { QuizChoosing };
