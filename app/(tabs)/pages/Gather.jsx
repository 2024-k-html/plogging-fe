import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const ploggingGather = require("../../../assets/image/ploggingGather.png");

const initialData = [
  {
    area: "수지구",
    title: "성복천에서 같이 플로깅 해요 !",
    maxPeople: 20,
    currentPeople: 4,
    startDate: "2024-08-07",
    endDate: "2024-09-07",
    context: "~~",
  },

  {
    area: "기흥구",
    title: "함께 어울리는 플로깅 할 사람을 모집해요",
    maxPeople: 30,
    currentPeople: 23,
    startDate: "2024-09-20",
    endDate: "2024-09-24",
    context:
      "더 다양한 사람들과 소통하고 싶으신 분 ✋ 9월 20일 오후 6시,  플로깅에 여러분을 초대합니다! 그냥 플로깅이 아닌, 다양한 국적의 사람들을 만나 볼 기회! 새로운 사람과 교류하고 싶은 분, 00에서 재미 보장하는 플로깅에 바로 탑승하세요! 레츠고! 환경과 함께 다양한 국적의 사람들과 사귈 수 있는 재밌는 플로깅 세계로! ",
  },
  {
    area: "처인구",
    title: "대웅경영개발원 근처에서 같이 플로깅 해요 !",
    maxPeople: 15,
    currentPeople: 12,
    startDate: "2024-08-11",
    endDate: "2024-09-11",
    context: "~~",
  },
  {
    area: "기흥구",
    title: "기흥역 근처에서 같이 플로깅 해요 !",
    maxPeople: 25,
    currentPeople: 13,
    startDate: "2024-08-20",
    endDate: "2024-09-30",
    context: "~~",
  },
];

const getBackgroundColor = (area) => {
  switch (area) {
    case "수지구":
      return "#2DB400";
    case "기흥구":
      return "#F85B56";
    case "처인구":
      return "#FFDE33";
  }
};

const Gather = ({ route, navigation }) => {
  const [sampleData, setSampleData] = useState(initialData);

  useEffect(() => {
    if (route.params?.newPost) {
      setSampleData((prevData) => [route.params.newPost, ...prevData]);
    }
  }, [route.params?.newPost]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView>
        <Image source={ploggingGather} className="resize-contain" />
        <View className="flex-1 px-4">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-base text-gray pl-2 mb-2">
                현재 모집 중인 플로깅
              </Text>
              <Text className="text-base text-gray pl-2 mb-4">
                총 {sampleData.length}개
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("post")}
              className="bg-blue px-2 py-1 h-7 rounded-sm"
            >
              <Text className="text-center mt-0.5 font-bold">
                + 모집 글 쓰기
              </Text>
            </TouchableOpacity>
          </View>
          {sampleData.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row border rounded-xl mb-4 p-3 bg-white shadow-md"
              onPress={() =>
                navigation.navigate("eachPost", {
                  title: item.title,
                  startDate: item.startDate,
                  maxPeople: item.maxPeople,
                  currentPeople: item.currentPeople,
                  endDate: item.endDate,
                  context: item.context,
                  area: item.area,
                })
              }
            >
              <View
                style={{ backgroundColor: getBackgroundColor(item.area) }}
                className="w-16 h-16 rounded-full justify-center items-center"
              >
                <Text className="font-bold">{item.area}</Text>
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-lg font-bold">{item.title}</Text>
                <Text className="text-gray mt-2">
                  인원: {item.currentPeople}/{item.maxPeople} 명
                </Text>
                <Text className="mt-2 text-blue">
                  일정: {item.startDate} ~ {item.endDate}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gather;
