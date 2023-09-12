import { createDrawerNavigator } from '@react-navigation/drawer';
import { ReactScreen } from '../screens/react';
import { ReactNativeScreen } from '../screens/react-native';
import { JavaScriptScreen } from '../screens/javascript';
import { TypeScriptScreen } from '../screens/typescript';
import { ReduxScreen } from '../screens/redux';
import { COLORS } from '../assets/colors';

const Drawer = createDrawerNavigator();

function MainDrawer() {
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
