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
    <View className="w-1/2 p-1 pb-10" key={courseName}>
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
        <Text className="bg-yellow py-1 text-xl font-bold  w-16 text-center mx-2">
          처인구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          {renderCourse("대웅경영개발원 - 포곡중학교", [
            [37.2825145, 127.2405551],
            [37.2799075, 127.2218428],
          ])}
          {renderCourse("김량쟝역 - 용인중앙시장역", [
            [37.237293, 127.198671],
            [37.23789, 127.209046],
          ])}
          {renderCourse("용인시청 - 명지대역", [
            [37.240608, 127.1772935],
            [37.238043, 127.190298],
          ])}
          {/* {renderCourse("고진역 - 보평역", [
            [37.244643, 127.214168],
            [37.262406, 127.223526],
          ])} */}
          {renderCourse("남사 시민야구장 - 이진봉", [
            [37.1116777, 127.1635253],
            [37.1666241, 127.2152553],
          ])}
        </View>

        {/* 수지구 */}
        <Text className="bg-coral py-1 text-xl font-bold w-16 text-center mx-2 mt-8">
          수지구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          {renderCourse("수지우체국 - 죽전역", [
            [37.3211906, 127.0968207],
            [37.324583, 127.107398],
          ])}
          {renderCourse("동천자연식물원 - 동천동우체국", [
            [37.3372303, 127.0792004],
            [35.93203889999999, 128.5580582],
          ])}
          {renderCourse("홍천말근린공원 - 수지생태공원", [
            [37.3219386107881, 127.078148702136],
            [37.324076, 127.0862177],
          ])}
          {renderCourse("신리초등학교 - 신정공원", [
            [37.1116777, 127.1635253],
            [37.3198793, 127.0943951],
          ])}
        </View>

        {/* 기흥구 */}
        <Text className="bg-green py-1 text-xl font-bold w-16 text-center mx-2 mt-8">
          기흥구
        </Text>
        <View className="flex-row flex-wrap justify-between mt-4">
          {renderCourse("강남대역 - 기흥역", [
            [37.270197, 127.126007],
            [37.275657, 127.115944],
          ])}
          {renderCourse("기흥역 - 신갈역", [
            [37.2782, 127.1265],
            [37.286127, 127.111311],
          ])}
          {renderCourse("구성역 - 보정역", [
            [37.299013, 127.105664],
            [37.312747, 127.108232],
          ])}
          {renderCourse("마북 근린 공원 - 구성역", [
            [37.2979795, 127.1144222],
            [37.299013, 127.105664],
          ])}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Course;
