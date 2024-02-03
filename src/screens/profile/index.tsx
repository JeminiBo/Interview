import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { COLORS } from '../../assets/colors';

const Profile = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.listContent}>
      <Text style={styles.title}>Pavel Dubrouski</Text>
      <Text style={styles.topicsProgress}>Topics progress</Text>
      <View style={styles.topics}>
        <TouchableOpacity
          style={styles.topicsProgressRow}
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('TopicStatistic', {
              title: 'Javascript',
              progress: 0.3,
            });
          }}>
          <Text style={styles.topicsProgressTitle}>Javascript</Text>
          <Progress.Bar
            progress={0.3}
            width={200}
            height={10}
            color="#8FCC33"
            unfilledColor="#F67F6F"
            borderWidth={0}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicsProgressRow}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('TopicStatistic', { title: 'React', progress: 0.8 });
          }}>
          <Text style={styles.topicsProgressTitle}>React</Text>
          <Progress.Bar
            progress={0.8}
            height={10}
            width={200}
            color="#8FCC33"
            unfilledColor="#F67F6F"
            borderWidth={0}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  listContent: { paddingHorizontal: 20, paddingVertical: 20 },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  topicsProgress: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 40,
    textAlign: 'center',
  },
  topicsProgressRow: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    gap: 20,
    justifyContent: 'space-between',
  },
  topicsProgressTitle: {
    fontSize: 16,
    color: COLORS.white,
  },
  topics: {
    marginTop: 20,
    gap: 12,
  },
});

export { Profile };
