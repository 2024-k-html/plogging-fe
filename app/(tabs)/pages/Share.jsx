import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const green = require("../../../assets/image/green.png");
const instagram = require("../../../assets/image/instagram.png");

const Share = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center text-xl mt-10">
        OOO님의 플로깅 사진을 공유해보세요 !
      </Text>
      <View className="flex justify-center items-center mt-10">
        <TouchableOpacity className="bg-yellow w-5/6 mb-4 flex-row items-center  rounded">
          <Image source={green} className="w-8 h-8 mr-2 ml-7" />
          <Text className="text-center text-xl py-4 ml-4 font-bold">
            플로깅 피드에 공유하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("insta")}
          className="bg-yellow w-5/6 flex-row items-center justify-center rounded"
        >
          <Image source={instagram} className="w-8 h-8 mr-3" />
          <Text className="text-center text-xl py-4 font-bold">
            인스타그램 스토리로 공유하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Share;
