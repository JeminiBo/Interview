import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../assets/colors';
import BackArrow from '../../assets/icons/back-arrow.svg';
import * as Progress from 'react-native-progress';
import { mockTopics } from '../profile/mock';

const TopicsStatistic = ({
  route: {
    params: { title, progress },
  },
  navigation,
}) => {
  const topic = mockTopics.find((item) => item.title === title);
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{ paddingBottom: 60 }}>
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
      <View style={styles.answersWrapper}>
        {topic.statistic.map((item) => {
          return (
            <View key={item.level}>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>
                {item.level}
              </Text>
              <View style={{ marginTop: 20, gap: 12 }}>
                {item.answers.map((item) => {
                  return (
                    <View
                      key={item.question}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                        backgroundColor: item.isCorrect ? '#8FCC33' : '#F67F6F',
                        minHeight: 50,
                        alignItems: 'center',
                      }}>
                      <Text>{item.question}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
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
  answersWrapper: {
    gap: 30,
  },
});

export { TopicsStatistic };
