import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ReactScreen } from '../screens/react';
import { ReactNativeScreen } from '../screens/react-native';
import { JavaScriptScreen } from '../screens/javascript';
import { TypeScriptScreen } from '../screens/typescript';
import { ReduxScreen } from '../screens/redux';
import { COLORS } from '../assets/colors';
import { getDbSettings } from '../helpers/settingsHelper';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Alert } from 'react-native';
import { clearTopics } from '../redux/topics/topicsSlice';
import { setVersion } from '../redux/settings/settingsSlice';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkUpdates();
  }, []);

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
      <Drawer.Screen name="JavaScript" component={JavaScriptScreen} />
      <Drawer.Screen name="React" component={ReactScreen} />
      <Drawer.Screen name="Redux" component={ReduxScreen} />
      <Drawer.Screen name="TypeScript" component={TypeScriptScreen} />
      <Drawer.Screen name="React-native" component={ReactNativeScreen} />
    </Drawer.Navigator>
  );
}

export { MainDrawer };
