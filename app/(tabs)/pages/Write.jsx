import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const location = require("../../../assets/image/location.png");
const time = require("../../../assets/image/time.png");
const distance = require("../../../assets/image/distance.png");
const trashBin = require("../../../assets/image/trashBin.png");

const Write = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // 갤러리 접근 권한 요청
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert("사진에 접근할 권한이 필요합니다.");
      return;
    }

    // 이미지 선택
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="border-b py-4 items-center">
        <Text className="text-xl">활동 게시글 작성</Text>
      </View>
      <ScrollView className="px-4 pt-10">
        {/* 이미지 업로드 섹션 */}
        <TouchableOpacity
          onPress={pickImage}
          className="border border-gray-300 rounded-md p-6 items-center justify-center"
          style={{ height: 200, borderStyle: "dashed" }}
        >
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
            />
          ) : (
            <Text className="text-gray-400">클릭하여 사진 업로드(필수)</Text>
          )}
        </TouchableOpacity>
        <Text className="text-blue mt-2 text-center">
          * 이미지 등록 후에는 이미지 수정이 불가합니다
        </Text>

        {/* 기타 정보 섹션 */}
        <View className="mb-6 flex-row justify-between mt-8">
          <View className="flex-row">
            <Image source={location} className="mt-1 mr-2 w-5 h-5" />
            <Text className="mb-2 text-xl">활동 지역</Text>
          </View>
          <Text className="mb-2 text-xl">사용자의 마지막 위도&경도</Text>
        </View>

        <View className="mb-6 flex-row justify-between">
          <View className="flex-row">
            <Image source={time} className="mt-1 mr-2 w-5 h-5" />
            <Text className="mb-2 text-xl">소요 시간</Text>
          </View>
          <Text className="mb-2 text-xl">사용자의 플로깅 시간</Text>
        </View>

        <View className="mb-6 flex-row justify-between">
          <View className="flex-row">
            <Image source={distance} className="mt-1 mr-2 w-5 h-5" />
            <Text className="mb-2 text-xl">이동 거리</Text>
          </View>
          <Text className="mb-2 text-xl">사용자가 플로깅한 거리</Text>
        </View>

        <View className="mb-6 flex-row justify-between">
          <View className="flex-row">
            <Image source={trashBin} className="mt-1 mr-2 w-5 h-5" />
            <Text className="mb-2 text-xl">총 주운 쓰레기 수</Text>
          </View>
          <Text className="mb-2 text-xl">AI 판별 후 나온 result</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Write;
