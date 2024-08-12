import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Course = () => {
  const renderCourse = (courseName, coordinates) => (
    <View className="w-1/2 p-1" key={courseName}>
      <MapView
        className="w-full h-40"
        initialRegion={{
          latitude: coordinates[0][0],
          longitude: coordinates[0][1],
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: coordinates[0][0],
            longitude: coordinates[0][1],
          }}
        />
        <Marker
          coordinate={{
            latitude: coordinates[1][0],
            longitude: coordinates[1][1],
          }}
        />
      </MapView>
      <Text className="text-center mt-1">{courseName}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border-b py-4 mb-6 items-center">
        <Text className="text-xl">플로깅 추천 코스</Text>
      </View>
      <ScrollView className="px-4">
        {/* 처인구 */}
        <Text className="bg-yellow py-1 text-xl font-bold w-16 text-center mx-2">
          처인구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          {renderCourse("김량쟝역 - 용인중앙시장역", [
            [37.2826, 127.1187],
            [37.2835, 127.1322],
          ])}
          {renderCourse("용인시청 - 명지대역", [
            [37.2713, 127.1221],
            [37.2798, 127.1351],
          ])}
          {renderCourse("고진역 - 보평역", [
            [37.2817, 127.1146],
            [37.2841, 127.1178],
          ])}
        </View>

        {/* 수지구 */}
        <Text className="bg-coral py-1 text-xl font-bold w-16 text-center mx-2 mt-8">
          수지구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          {renderCourse("수지우체국 - 죽전역", [
            [37.293, 127.1165],
            [37.2994, 127.1201],
          ])}
          {renderCourse("동천자연식물원 - 동천동우체국", [
            [37.2935, 127.1159],
            [37.2957, 127.1182],
          ])}
          {renderCourse("홍천말근린공원 - 수지생태공원", [
            [37.2876, 127.1085],
            [37.2958, 127.1165],
          ])}
        </View>

        {/* 기흥구 */}
        <Text className="bg-green py-1 text-xl font-bold w-16 text-center mx-2 mt-8">
          기흥구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          {renderCourse("기흥역 - 강남대역", [
            [37.2782, 127.1265],
            [37.2827, 127.1298],
          ])}
          {renderCourse("기흥역 - 신갈역", [
            [37.2782, 127.1265],
            [37.284, 127.1225],
          ])}
          {renderCourse("구성역 - 보정역", [
            [37.2728, 127.1228],
            [37.2803, 127.133],
          ])}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Course;
