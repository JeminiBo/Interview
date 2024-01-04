import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoadingScreen } from '../screens/loading';
import { TopicScreen } from '../screens/topic';
import { COLORS } from '../assets/colors';
import { getDbSettings } from '../helpers/settingsHelper';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Alert } from 'react-native';
import { clearTopicsQuestions } from '../redux/topicsQuestions/topicsQuestionsSlice';
import { setVersion } from '../redux/settings/settingsSlice';
import { clearTopics, getTopics } from '../redux/topics/topicsSlice';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  const { topics, isTopicsLoading } = useAppSelector((state) => state.topics);
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkUpdates();
  }, []);

  useEffect(() => {
    if (topics.length === 0) {
      dispatch(getTopics());
    }
  }, [topics]);

  const checkUpdates = async () => {
    const dbSettings = await getDbSettings();
    const dbVersion = dbSettings.version;

    if (settings.version < dbVersion) {
      Alert.alert(
        'Updates',
        'New questions available, click update to get them!',
        [
          {
            text: 'Update',
            onPress: () => {
              dispatch(clearTopics());
              dispatch(clearTopicsQuestions());
              dispatch(setVersion({ version: dbVersion }));
            },
            style: 'default',
          },
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
        ],
      );
    }
  };

  if (topics.length === 0 || isTopicsLoading) {
    return <LoadingScreen />;
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.white,
        drawerStyle: {
          backgroundColor: COLORS.secondary,
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.white,
      }}>
      {topics.map((item) => (
        <Drawer.Screen
          key={item.key}
          name={item.title}
          initialParams={{ topicKey: item.key }}
          component={TopicScreen}
        />
      ))}
    </Drawer.Navigator>
  );
}

export { MainDrawer };
