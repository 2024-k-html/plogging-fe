import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Gather from "./pages/Gather";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="ranking" component={Ranking} />
      <Stack.Screen name="gather" component={Gather} />
    </Stack.Navigator>
  );
};

export default App;
