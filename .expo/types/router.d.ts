/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(tabs)` | `/App` | `/_sitemap` | `/explore` | `/pages/CameraScreen` | `/pages/Gather` | `/pages/Home` | `/pages/Login` | `/pages/Map` | `/pages/Post` | `/pages/Ranking` | `/pages/Write`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
