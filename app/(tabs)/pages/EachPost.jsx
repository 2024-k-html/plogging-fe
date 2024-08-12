import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const plogging_image = require("../../../assets/image/ploggingSignup.jpg");

const EachPost = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <Image source={plogging_image} className="w-full h-56 resize-contain" />
        <View className=" ml-4 ">
          <Text className="text-2xl font-bold mt-4">제목</Text>
          <Text className="mt-2 text-blue text-base">
            시작 날짜 ~ 종료 날짜
          </Text>
          <View className="flex-row">
            <Text className="mt-2 mr-10">n / 모집 인원</Text>
            <Text className="mt-2">지역</Text>
          </View>
          <Text className="mt-4">내용</Text>
          <View className="flex justify-center items-center mt-10">
            <TouchableOpacity className="bg-green w-5/6 rounded-lg">
              <Text className="text-center py-2 text-xl font-bold">
                플로깅 참여하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-green w-5/6 mt-4 rounded-lg"
              onPress={() => navigation.navigate("gather")}
            >
              <Text className="text-center py-2 text-xl font-bold">
                뒤로 가기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EachPost;
