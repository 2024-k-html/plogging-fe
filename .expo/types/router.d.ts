/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/App` | `/(tabs)/explore` | `/(tabs)/pages/CameraScreen` | `/(tabs)/pages/Course` | `/(tabs)/pages/CourseMap` | `/(tabs)/pages/Gather` | `/(tabs)/pages/Home` | `/(tabs)/pages/Login` | `/(tabs)/pages/Map` | `/(tabs)/pages/Post` | `/(tabs)/pages/Quit` | `/(tabs)/pages/Ranking` | `/(tabs)/pages/Write` | `/App` | `/_sitemap` | `/explore` | `/pages/CameraScreen` | `/pages/Course` | `/pages/CourseMap` | `/pages/Gather` | `/pages/Home` | `/pages/Login` | `/pages/Map` | `/pages/Post` | `/pages/Quit` | `/pages/Ranking` | `/pages/Write`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
