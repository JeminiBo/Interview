import React, { useState, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../assets/colors';
import BackArrow from '../../assets/icons/back-arrow.svg';
import RadioGroup from 'react-native-radio-buttons-group';
import PagerView from 'react-native-pager-view';

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
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Answer 1',
        value: 'option1',
        ...radioStyles,
      },
      {
        id: '2',
        label: 'Answer 2',
        value: 'option2',
        ...radioStyles,
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const pagerRef = useRef<PagerView>();
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
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
        style={{ flex: 1 }}
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
                  containerStyle={{ alignItems: 'flex-start', gap: 15 }}
                />
              </View>
              <TouchableOpacity
                disabled={!selectedId}
                style={{
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  backgroundColor: COLORS.main,
                }}
                onPress={() => {
                  console.log('SDSD', pagerRef?.current);
                  pagerRef?.current?.setPage(index + 1);
                }}>
                <Text
                  style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                  Next question
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </PagerView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: COLORS.secondary, padding: 20 },
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
  },
});

export { Quiz };
