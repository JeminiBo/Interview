import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { styles } from './styles';
import { mockTopics } from './mock';

const Profile = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.listContent}>
      <Text style={styles.title}>Pavel Dubrouski</Text>
      <Text style={styles.topicsProgress}>Topics progress</Text>
      <View style={styles.topics}>
        {mockTopics.map((item) => {
          return (
            <TouchableOpacity
              key={`${item.title}_progress`}
              style={styles.topicsProgressRow}
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('TopicStatistic', {
                  title: item.title,
                  progress: item.progress,
                });
              }}>
              <Text style={styles.topicsProgressTitle}>{item.title}</Text>
              <Progress.Bar
                progress={item.progress}
                width={200}
                height={10}
                color="#8FCC33"
                unfilledColor="#F67F6F"
                borderWidth={0}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export { Profile };
