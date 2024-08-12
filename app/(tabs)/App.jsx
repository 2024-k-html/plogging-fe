import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return <Stack.Navigator initialRouteName="home"></Stack.Navigator>;
};

export default App;
