import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/colors';

import * as Progress from 'react-native-progress';

interface Props {
  goToStatistic: () => void;
}

const Congrats = ({ goToStatistic }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Congratulations, you have completed the quiz!
      </Text>

      <View style={styles.contentWrapper}>
        <Text style={styles.progressTitle}>Your progress</Text>
        <Progress.Pie
          color="#8FCC33"
          unfilledColor="#F67F6F"
          borderWidth={0}
          progress={0.6}
          size={200}
        />
        <TouchableOpacity
          style={styles.viewAnswersButton}
          onPress={goToStatistic}
          activeOpacity={0.8}>
          <Text style={styles.continueButtonText}>View answers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginTop: 20, alignItems: 'center' },
  contentWrapper: { width: '100%', alignItems: 'center', marginTop: 30 },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    fontWeight: '800',
  },
  viewAnswersButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.main,
    width: '100%',
    marginTop: 50,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export { Congrats };
