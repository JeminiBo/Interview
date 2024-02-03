import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { LoadingScreen } from '../screens/loading';
import { TopicScreen } from '../screens/topic';
import { COLORS } from '../assets/colors';
import { getDbSettings } from '../helpers/settingsHelper';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Alert } from 'react-native';
import { clearTopicsQuestions } from '../redux/topicsQuestions/topicsQuestionsSlice';
import { setVersion } from '../redux/settings/settingsSlice';
import { clearTopics, getTopics } from '../redux/topics/topicsSlice';
import { QuizChoosing } from '../screens/quizChoosing';
import { Header } from '../components/layouts/Header';
import { Profile } from '../screens/profile';
import { TopicsStatistic } from '../screens/topicStatistic';
import { Quiz } from '../screens/quiz';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="TopicStatistic"
        component={TopicsStatistic}
        initialParams={{ title: '', progress: 0 }}
      />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  const { topics } = useAppSelector((state) => state.topics);
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

        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          const openQuizChoosingModal = () => {
            navigation.navigate('QuizChoosingModal');
          };
          const openDrawer = () => {
            navigation.openDrawer();
          };

          return (
            <Header
              title={title}
              leftAction={openDrawer}
              rightAction={openQuizChoosingModal}
            />
          );
        },
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
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.secondary },
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 12,
          color: 'white',
        },
      }}>
      <Tab.Screen name="Learning" component={DrawerStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

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
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabStack}
        options={{ headerShown: false }}
      />
      <Stack.Group>
        <Stack.Screen
          name="QuizChoosingModal"
          component={QuizChoosing}
          options={{
            presentation: 'transparentModal',
            headerShown: false,
            animation: 'none',
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            headerShown: false,
          }}
          initialParams={{title: ''}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export { MainDrawer };
