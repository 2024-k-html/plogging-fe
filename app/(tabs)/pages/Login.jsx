import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

const plogging_icon = require("../../../assets/image/ploggingIcon2.png");

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpPress = () => {
    if (!userId || !password) {
      Alert.alert("입력 오류", "아이디와 비밀번호를 모두 입력해주세요");
      return;
    }

    // 회원가입 처리 로직
    Alert.alert("회원가입 성공", "회원가입이 완료되었습니다.");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4 py-20">
        <View>
          <Image source={plogging_icon} className="w-12 h-12 mb-4" />
          <Text className="text-2xl mt-2">안녕하세요</Text>
          <Text className="text-2xl mt-2">플로깅입니다</Text>
          <Text className="text-base mt-10 mb-10 text-gray">
            회원 서비스 이용을 위해 로그인 해주세요
          </Text>
        </View>
        <View className="flex justify-center pb-4">
          <TextInput
            placeholder="아이디"
            style={{ fontSize: 18 }}
            placeholderTextColor="#999"
            className="border-b w-full p-2 rounded"
            value={userId}
            onChangeText={(text) => setUserId(text)}
          />
        </View>
        <View className="flex justify-center pb-4">
          <TextInput
            placeholder="비밀번호"
            style={{ fontSize: 18 }}
            placeholderTextColor="#999"
            className="border-b w-full p-2 rounded"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          className="bg-green rounded-md mt-10"
          onPress={handleSignUpPress}
        >
          <Text className="text-center text-white py-4 text-xl">
            회원 가입하기
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
