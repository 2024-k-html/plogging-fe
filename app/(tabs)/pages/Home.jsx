/* eslint-disable react/prop-types */
import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plogging_image = require("../../../assets/image/homePlogging.png");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <StatusBar style="dark" />
      <Image source={plogging_image} className="resize-contain" />
      <View className="bg-white border rounded-xl w-4/5 p-3 absolute top-64">
        <Text className="pl-2 mb-3">현재까지</Text>
        <View className="items-center">
          <Text className="text-lg">
            <Text className="font-bold text-xl text-green">10.4 km</Text>를
            걸으면서
          </Text>
          <Text className="text-lg mb-3">
            <Text className="font-bold text-xl text-green">107개</Text>의
            쓰레기를 주웠어요 !
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("map")}
        className="bg-green shadow-md w-40 h-40 rounded-full mt-36 justify-center items-center"
      >
        <Text className="text-white text-2xl font-bold">플로깅</Text>
        <Text className="text-2xl text-white font-bold">시작하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
