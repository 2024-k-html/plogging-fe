/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/App` | `/(tabs)/explore` | `/(tabs)/pages/CameraScreen` | `/(tabs)/pages/Chat` | `/(tabs)/pages/Course` | `/(tabs)/pages/CourseMap` | `/(tabs)/pages/EachPost` | `/(tabs)/pages/Gather` | `/(tabs)/pages/Home` | `/(tabs)/pages/InstaShare` | `/(tabs)/pages/Login` | `/(tabs)/pages/Map` | `/(tabs)/pages/Post` | `/(tabs)/pages/Quit` | `/(tabs)/pages/Ranking` | `/(tabs)/pages/Share` | `/(tabs)/pages/SignUp` | `/(tabs)/pages/Write` | `/(tabs)/useAuth` | `/App` | `/_sitemap` | `/explore` | `/pages/CameraScreen` | `/pages/Chat` | `/pages/Course` | `/pages/CourseMap` | `/pages/EachPost` | `/pages/Gather` | `/pages/Home` | `/pages/InstaShare` | `/pages/Login` | `/pages/Map` | `/pages/Post` | `/pages/Quit` | `/pages/Ranking` | `/pages/Share` | `/pages/SignUp` | `/pages/Write` | `/useAuth`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
