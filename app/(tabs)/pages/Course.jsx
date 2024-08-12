import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Course = () => {
  const latitude = 37;
  const longitude = 127;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border-b py-4 mb-6 items-center">
        <Text className="text-xl">플로깅 추천 코스</Text>
      </View>
      <ScrollView className="px-4">
        {/* 수지구 */}
        <Text className="bg-green py-1 text-xl font-bold w-16 text-center mx-2">
          수지구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">탄천 코스</Text>
          </View>

          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">OO 코스</Text>
          </View>

          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">OO 코스</Text>
          </View>

          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">OO 코스</Text>
          </View>
        </View>

        {/* 기흥구 */}
        <Text className="bg-gray-400 py-1 text-xl font-bold w-16 text-center mx-2 mt-8">
          기흥구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">기흥역 코스</Text>
          </View>

          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">OO 코스</Text>
          </View>

          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">OO 코스</Text>
          </View>

          <View className="w-1/2 p-1">
            <MapView
              className="w-full h-40"
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude, longitude }} />
            </MapView>
            <Text className="text-center mt-1">OO 코스</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Course;
