import React from "react";
import { SafeAreaView, ScrollView, Text, View, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Course = ({ navigation }) => {
  const handleCoursePress = (courseName, coordinates) => {
    Alert.alert(
      `${courseName} 코스로 플로깅을 시작하시겠습니까?`,
      "",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "시작",
          onPress: () =>
            navigation.navigate("courseMap", {
              start: coordinates[0],
              end: coordinates[1],
            }),
        },
      ],
      { cancelable: false }
    );
  };

  const renderCourse = (courseName, coordinates) => (
    <View className="w-1/2 p-1" key={courseName}>
      <Text className="text-center mt-1 mb-2 font-bold">{courseName}</Text>
      <MapView
        className="w-full h-40"
        initialRegion={{
          latitude: coordinates[0][0],
          longitude: coordinates[0][1],
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // onPress 이벤트를 handleCoursePress로 대체
        onPress={() => handleCoursePress(courseName, coordinates)}
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
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4 py-4">
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
          {renderCourse("남사 시민야구장 - 이진봉", [
            [37.277, 127.2586],
            [37.2804, 127.2614],
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
          {renderCourse("신리초등학교 - 신정공원", [
            [37.3192, 127.2614],
            [37.3188, 127.0957],
          ])}
        </View>

        {/* 기흥구 */}
        <Text className="bg-green py-1 text-xl font-bold w-16 text-center mx-2 mt-8">
          기흥구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          {renderCourse("강남대역 - 기흥역", [
            [37.2827, 127.1298],
            [37.2782, 127.1265],
          ])}
          {renderCourse("기흥역 - 신갈역", [
            [37.2782, 127.1265],
            [37.284, 127.1225],
          ])}
          {renderCourse("구성역 - 보정역", [
            [37.2728, 127.1228],
            [37.2803, 127.133],
          ])}
          {renderCourse("마북 근린 공원 - 구성역", [
            [37.2763, 127.0923],
            [37.2746, 127.0869],
          ])}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Course;
