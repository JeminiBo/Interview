import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../assets/colors';
import BackArrow from '../../assets/icons/back-arrow.svg';
import * as Progress from 'react-native-progress';

const TopicsStatistic = ({
  route: {
    params: { title, progress },
  },
  navigation,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <BackArrow height={25} width={25} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.mockRightAction} />
      </View>
      <View style={styles.statisticCircle}>
        <Progress.Pie
          color="#8FCC33"
          unfilledColor="#F67F6F"
          borderWidth={0}
          progress={progress}
          size={200}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.main,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
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
  statisticCircle: {
    alignItems: 'center',
    marginTop: 40,
  },
});

export { TopicsStatistic };
