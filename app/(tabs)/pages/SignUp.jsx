import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const plogging_image = require("../../../assets/image/ploggingSignup.jpg");

const SignUp = () => {
  const [area, setArea] = useState("");
  return (
    <SafeAreaView className=" bg-white flex-1">
      <ScrollView className="px-4 py-10">
        <View className="flex justify-center pb-4">
          <Text className="mb-2 text-xl">이름</Text>
          <TextInput
            className="border w-full p-2 rounded"
            keyboardType="numeric"
          />
        </View>
        <View className="mb-6">
          <Text className="mb-2 text-xl">지역</Text>
          <View className="border border-gray-400 rounded">
            <Dropdown
              style={{ padding: 10 }}
              placeholder="선택하세요"
              data={[
                { label: "수지구", value: "suji" },
                { label: "기흥구", value: "giheung" },
                { label: "처인구", value: "cheoin" },
              ]}
              labelField="label"
              valueField="value"
              value={area}
              onChange={(item) => setArea(item.value)}
            />
          </View>
        </View>
        <View className="flex justify-center pb-6">
          <Text className="mb-2 text-xl">아이디</Text>
          <TextInput
            className="border w-full p-2 rounded"
            keyboardType="numeric"
          />
        </View>
        <View className="flex justify-center pb-6">
          <Text className="mb-2 text-xl">비밀번호</Text>
          <TextInput
            className="border w-full p-2 rounded"
            keyboardType="numeric"
          />
        </View>
        <View className="flex justify-center pb-6">
          <Text className="mb-2 text-xl">비밀번호 확인</Text>
          <TextInput
            className="border w-full p-2 rounded"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity className="bg-blue rounded-md mt-10">
          <Text className="text-center text-white py-2 text-xl">
            모집 글 올리기
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
