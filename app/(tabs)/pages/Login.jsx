import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const plogging_icon = require("../../../assets/image/ploggingIcon2.png");

const Login = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4 py-20">
        <View>
          <Image source={plogging_icon} className="w-12 h-12 mb-4" />
          <Text className="text-2xl mt-2">안녕하세요.</Text>
          <Text className="text-2xl mt-2">플로깅입니다.</Text>
          <Text className="text-base mt-10 mb-10 text-gray">
            회원 서비스 이용을 위해 로그인 해주세요.
          </Text>
        </View>
        <View className="flex justify-center pb-4">
          <TextInput
            placeholder="아이디"
            style={{ fontSize: 18 }}
            placeholderTextColor="#999"
            className="border-b w-full p-2 rounded"
          />
        </View>
        <View className="flex justify-center pb-4">
          <TextInput
            placeholder="비밀번호"
            style={{ fontSize: 18 }}
            placeholderTextColor="#999"
            className="border-b w-full p-2 rounded"
          />
        </View>
        <TouchableOpacity className="bg-green rounded-md mt-10">
          <Text className="text-center text-white py-2 text-xl">
            회원 가입하기
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
