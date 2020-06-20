import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Global from './pages/Global';
import Brazil from './pages/Brazil';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Global" component={Global} />
        <AppStack.Screen name="Brazil" component={Brazil} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
