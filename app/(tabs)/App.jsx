import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Gather from "./pages/Gather";
import Map from "./pages/Map";
import CameraScreen from "./pages/CameraScreen";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Quit from "./pages/Quit";
import Course from "./pages/Course";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="ranking" component={Ranking} />
      <Stack.Screen name="gather" component={Gather} />
      <Stack.Screen name="map" component={Map} />
      <Stack.Screen name="camera" component={CameraScreen} />
      <Stack.Screen name="post" component={Post} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="write" component={Write} />
      <Stack.Screen name="quit" component={Quit} />
      <Stack.Screen name="course" component={Course} />
    </Stack.Navigator>
  );
};

export default App;
