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

const Post = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [area, setArea] = useState("");
  const [context, setContext] = useState("");

  const handlePostSubmit = () => {
    const newPost = {
      title,
      maxPeople: parseInt(maxPeople, 10),
      currentPeople: 0, // 처음에는 참여 인원이 0명으로 설정
      startDate,
      endDate,
      area,
      context,
    };

    navigation.navigate("gather", { newPost });
  };

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
            <TextInput
              className="border w-64 p-2 rounded"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View className="mb-6 flex-row justify-between">
            <Text className="mb-2 text-xl">모집 정원</Text>
            <TextInput
              className="border w-64 p-2 rounded"
              keyboardType="numeric"
              value={maxPeople}
              onChangeText={setMaxPeople}
            />
          </View>

          <View className="mb-6 flex-row items-center">
            <Text className="mb-2 flex-1 text-xl">일정</Text>
            <TextInput
              className="border p-2 rounded flex-1"
              placeholder="yyyy-MM-dd"
              value={startDate}
              onChangeText={setStartDate}
            />
            <Text className="mx-2">~</Text>
            <TextInput
              className="border p-2 rounded flex-1"
              placeholder="yyyy-MM-dd"
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>

          <View className="mb-6">
            <Text className="mb-2 text-xl">지역</Text>
            <View className="border border-gray-400 rounded">
              <Dropdown
                style={{ padding: 10 }}
                placeholder="선택하세요"
                data={[
                  { label: "수지구", value: "수지구" },
                  { label: "기흥구", value: "기흥구" },
                  { label: "처인구", value: "처인구" },
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
              value={context}
              onChangeText={setContext}
            />
          </View>
          <TouchableOpacity
            className="bg-blue rounded-md mt-10"
            onPress={handlePostSubmit}
          >
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
