import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ScheduleInputScreen from '../screens/ScheduleInputScreen';
import RideOfferScreen from '../screens/RideOfferScreen.js';
import RideSearchScreen from '../screens/RideSearchScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ScheduleInput" component={ScheduleInputScreen} />
      <Stack.Screen name="RideOffer" component={RideOfferScreen} />
      <Stack.Screen name="RideSearch" component={RideSearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
