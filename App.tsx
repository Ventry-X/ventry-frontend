/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeCarousel from './screens/Welcome/WelcomeCarousel';

import LoginScreen from './screens/Login/LoginScreen';
import WelcomeScreen1 from './screens/Welcome/WelcomeScreen1';
import OnboardingScreen from './screens/OnboardingScreen';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;  
  Onboarding: undefined;
};

export type { RootStackParamList };

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeCarousel} />
      <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


