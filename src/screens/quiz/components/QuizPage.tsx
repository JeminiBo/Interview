import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import ExampleVideo from '../../../assets/videos/video-example.mp4';
import RadioGroup from 'react-native-radio-buttons-group';
import { COLORS } from '../../../assets/colors';
import PagerView from 'react-native-pager-view';

interface Props {
  quiz: any;
  quizIndex: number;
  quizLength: number;
  setIsQuizFinished: (val: boolean) => void;
  selectedAnswerId?: string;
  setSelectedAnswerId: (val: string) => void;
  pagerRef: any
}

const QuizPage = ({
  quiz,
  quizIndex,
  quizLength,
  setIsQuizFinished,
  selectedAnswerId,
  setSelectedAnswerId,
  pagerRef,
}: Props) => {
  const videoRef = useRef<Video>(null);
  const radioStyles = {
    borderColor: 'green',
    color: 'red',
  };

  const labelStyle = {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '600',
  };

  return (
    <View style={{ justifyContent: 'space-between', gap: 20 }}>
      <View>
        <View style={styles.video}>
          <Video
            // Can be a URL or a local file.
            source={ExampleVideo}
            // Store reference
            ref={videoRef}
            // Callback when remote video is buffering
            onBuffer={() => {}}
            // Callback when video cannot be loaded
            onError={() => {}}
            style={styles.backgroundVideo}
            resizeMode="cover"
          />
        </View>
        <RadioGroup
          radioButtons={quiz.answers.map((item: any, index: number) => ({
            id: `${index}`,
            label: item.answer,
            value: item.answer,
            ...radioStyles,
          }))}
          onPress={setSelectedAnswerId}
          selectedId={selectedAnswerId}
          labelStyle={labelStyle}
          containerStyle={styles.radioButtons}
        />
      </View>
      <TouchableOpacity
        disabled={!selectedAnswerId}
        style={[
          styles.continueButton,
          { opacity: !selectedAnswerId ? 0.5 : 1 },
        ]}
        onPress={() => {
          if (quizIndex < quizLength - 1) {
            pagerRef?.current?.setPageWithoutAnimation(quizIndex + 1);
          } else {
            setIsQuizFinished(true);
          }
        }}
        activeOpacity={0.8}>
        <Text style={styles.continueButtonText}>Next question</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export { QuizPage };
