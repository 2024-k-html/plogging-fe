/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(tabs)` | `/App` | `/_sitemap` | `/explore` | `/pages/Home`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
