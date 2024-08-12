/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const Post = () => {
  const [area, setArea] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
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

          <View className="mb-4">
            <Text className="mb-2 text-xl">내용</Text>
            <TextInput
              className="border p-2 rounded h-32"
              multiline
              textAlignVertical="top"
            />
          </View>
          <TouchableOpacity className="bg-blue rounded-md mt-10">
            <Text className="text-center text-white py-2 text-xl">
              모집 글 올리기
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Post;
