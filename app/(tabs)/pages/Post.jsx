/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const Post = () => {
  const [area, setArea] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border-b py-4 items-center">
        <Text className="text-xl">모집 글 쓰기</Text>
      </View>
      <ScrollView className="px-4 pt-10">
        <View className="mb-6 flex-row justify-between">
          <Text className="mb-2 text-xl">제목</Text>
          <TextInput className="border w-64 p-2 rounded" />
        </View>
        <View className="mb-6 flex-row justify-between">
          <Text className="mb-2 text-xl">모집 인원</Text>
          <TextInput
            className="border w-64 p-2 rounded"
            keyboardType="numeric"
          />
        </View>
        <View className="mb-6 flex-row items-center">
          <Text className="mb-2 flex-1 text-xl">일정</Text>
          <TextInput
            className="border p-2 rounded flex-1"
            placeholder="yyyy-MM-dd"
          />
          <Text className="mx-2">~</Text>
          <TextInput
            className="border p-2 rounded flex-1"
            placeholder="yyyy-MM-dd"
          />
        </View>
        \
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;
