import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
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
import CourseMap from "./pages/CourseMap";
import { createStackNavigator } from "@react-navigation/stack";

// Stack Navigator 생성
const Stack = createStackNavigator();

// Home Stack Navigator
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="ranking" component={Ranking} />
      <Stack.Screen name="gather" component={Gather} />
      <Stack.Screen name="map" component={Map} />
      <Stack.Screen name="camera" component={CameraScreen} />
      <Stack.Screen name="post" component={Post} />
      <Stack.Screen name="write" component={Write} />
      <Stack.Screen name="quit" component={Quit} />
      <Stack.Screen name="course" component={Course} />
      <Stack.Screen name="courseMap" component={CourseMap} />
    </Stack.Navigator>
  );
};

// Drawer Navigator 생성
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="ranking" component={Ranking} />
        <Drawer.Screen name="gather" component={Gather} />
        <Stack.Screen name="course" component={Course} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
