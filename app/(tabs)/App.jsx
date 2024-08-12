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
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import EachPost from "./pages/EachPost";

import { createStackNavigator } from "@react-navigation/stack";

// Stack Navigator 생성
const Stack = createStackNavigator();

// Home Stack Navigator
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="ranking" component={Ranking} />
      <Stack.Screen name="gather" component={Gather} />
      <Stack.Screen
        name="map"
        options={{
          headerShown: false,
        }}
        component={Map}
      />
      <Stack.Screen name="camera" component={CameraScreen} />
      <Stack.Screen name="post" component={Post} />
      <Stack.Screen name="write" component={Write} />
      <Stack.Screen name="quit" component={Quit} />
      <Stack.Screen name="course" component={Course} />
      <Stack.Screen name="courseMap" component={CourseMap} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen
        name="eachPost"
        options={{
          headerShown: false,
        }}
        component={EachPost}
      />
    </Stack.Navigator>
  );
};

// Drawer Navigator 생성
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen
          name="홈"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen name="로그인" component={Login} />
        <Drawer.Screen name="랭킹" component={Ranking} />
        <Drawer.Screen name="함께 해요" component={Gather} />
        <Drawer.Screen name="추천 코스" component={Course} />
        <Drawer.Screen name="AI 채팅" component={Chat} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
