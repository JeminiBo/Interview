import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import BackArrow from '../../assets/icons/back-arrow.svg';
import PagerView from 'react-native-pager-view';
import { styles } from './styles';
import { quiz } from './mocks';
import { Congrats } from './components/Congrats';
import { QuizPage } from './components/QuizPage';

interface Props {
  navigation: any;
  route: any;
}

const Quiz = ({
  navigation,
  route: {
    params: { title },
  },
}: Props) => {
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<
    string | undefined
  >();
  const pagerRef = useRef<PagerView>();

  const goToStatistic = () => {
    navigation.goBack();
    navigation.navigate('TopicStatistic', {
      title: title,
      progress: 0.6,
    });
  };
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.listContent}>
      {!isQuizFinished ? (
        <>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <BackArrow height={25} width={25} />
            </TouchableOpacity>
            <Text style={styles.title}>{title} Quiz</Text>
            <View style={styles.mockRightAction} />
          </View>
          <PagerView
            ref={pagerRef}
            style={styles.page}
            initialPage={0}
            scrollEnabled={false}
            onPageSelected={() => {
              setSelectedAnswerId(undefined);
            }}>
            {quiz.map((item, index) => {
              return (
                <QuizPage
                  key={item.id}
                  quiz={item}
                  quizIndex={index}
                  quizLength={quiz.length}
                  setIsQuizFinished={setIsQuizFinished}
                  selectedAnswerId={selectedAnswerId}
                  setSelectedAnswerId={setSelectedAnswerId}
                  pagerRef={pagerRef}
                />
              );
            })}
          </PagerView>
        </>
      ) : (
        <Congrats goToStatistic={goToStatistic} />
      )}
    </ScrollView>
  );
};

export { Quiz };
