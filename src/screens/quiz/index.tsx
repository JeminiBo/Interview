import React, { useState, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../assets/colors';
import BackArrow from '../../assets/icons/back-arrow.svg';
import RadioGroup from 'react-native-radio-buttons-group';
import PagerView from 'react-native-pager-view';
import { styles } from './styles';

const quiz = [
  {
    id: 1,
    answers: [
      { answer: 'Answer1', isCorrect: false },
      { answer: 'Answer2', isCorrect: false },
      { answer: 'Answer3', isCorrect: true },
    ],
  },
  {
    id: 2,
    answers: [
      { answer: 'Answer4', isCorrect: false },
      { answer: 'Answer5', isCorrect: true },
      { answer: 'Answer6', isCorrect: false },
    ],
  },
  {
    id: 3,
    answers: [
      { answer: 'Answer7', isCorrect: true },
      { answer: 'Answer8', isCorrect: false },
      { answer: 'Answer9', isCorrect: false },
    ],
  },
];

const Quiz = ({
  navigation,
  route: {
    params: { title },
  },
}) => {
  const radioStyles = {
    borderColor: 'green',
    color: 'red',
  };

  const labelStyle = {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '600',
  };

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const pagerRef = useRef<PagerView>();
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.listContent}>
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
        scrollEnabled={false}>
        {quiz.map((item, index) => {
          return (
            <View
              key={item.id}
              style={{ justifyContent: 'space-between', gap: 20 }}>
              <View>
                <View style={styles.video} />
                <RadioGroup
                  radioButtons={item.answers.map((item, index) => ({
                    id: `${index}`,
                    label: item.answer,
                    value: item.answer,
                    ...radioStyles,
                  }))}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  labelStyle={labelStyle}
                  containerStyle={styles.radioButtons}
                />
              </View>
              <TouchableOpacity
                disabled={!selectedId}
                style={styles.continueButton}
                onPress={() => {
                  pagerRef?.current?.setPageWithoutAnimation(index + 1);
                }}
                activeOpacity={0.8}>
                <Text style={styles.continueButtonText}>Next question</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </PagerView>
    </ScrollView>
  );
};

export { Quiz };
