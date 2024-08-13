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

const EachPost = ({ navigation, route }) => {
  const { title, startDate, endDate, context, maxPeople, currentPeople, area } =
    route.params;
  const sentences = context.split(/(?<=[.!?])\s+/);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <Image source={plogging_image} className="w-full h-56 resize-contain" />
        <View className=" mx-4 ">
          <Text className="text-xl font-bold mt-4">{title}</Text>
          <Text className="mt-2 text-blue text-base">
            {startDate} ~ {endDate}
          </Text>
          <View className="flex-row">
            <Text className="mt-2 mr-10">
              현재 인원 : {currentPeople} / {maxPeople}
            </Text>
            <Text className="mt-2">{area}</Text>
          </View>
          <View className="mt-4">
            {sentences.map((sentence, index) => (
              <Text key={index} className="text-base break-words">
                {sentence}
              </Text>
            ))}
          </View>
          <View className="flex justify-center items-center mt-10">
            <TouchableOpacity
              onPress={() => navigation.replace("map")}
              className="bg-green w-5/6 rounded-lg"
            >
              <Text className="text-center py-2 text-xl font-bold">
                플로깅 참여하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-green w-5/6 mt-4 mb-10 rounded-lg"
              onPress={() => navigation.replace("gather")}
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
