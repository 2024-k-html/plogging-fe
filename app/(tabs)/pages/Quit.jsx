/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

const yong = require('../../../assets/image/greenYong.png');

const Quit = () => {
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Image source={yong} className="w-2/3 h-1/3" resizeMode="contain" />
      <View className="items-center mt-4">
        <Text className="text-2xl text-center">
          <Text className="text-blue font-bold">34분 2초</Text> 동안
        </Text>
        <Text className="text-2xl text-center">
          <Text className="text-blue font-bold">1.3km</Text>를 이동했고
        </Text>
        <Text className="text-2xl text-center">
          총 <Text className="text-blue font-bold">3개</Text>의 쓰레기를
          주웠어요!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Quit;
