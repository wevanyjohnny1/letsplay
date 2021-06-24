import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../global/styles/theme';

import { Homepage } from '../screens/Homepage';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
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
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
    </Navigator>
  )
}