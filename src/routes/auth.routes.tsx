import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Homepage } from '../screens/Homepage';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Homepage"
        component={Homepage}
      />
    </Navigator>
  )
}