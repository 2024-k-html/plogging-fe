/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';

const camera_change = require('../../../assets/image/camera_change.png');
const camera_icon = require('../../../assets/image/camera.png');

const CameraScreen = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [cameraImage, setCameraImage] = useState(null);

  if (!permission) {
    // 카메라 권한 로딩 중일 때
    return <View />;
  }

  if (!permission.granted) {
    // 카메라 권한 못 받았을 때
    return (
      <View className="flex-1 justify-center">
        <Text className="text-center pb-6">
          카메라를 실행하려면 실행 권한이 필요합니다.
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setCameraImage(uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setCameraImage(uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View className="flex-1 justify-center">
      {!cameraImage ? (
<<<<<<< HEAD
        <CameraView className="flex-1" type={facing} ref={cameraRef}>
          <View className="flex-1 flex-row bg-transparent">
            <TouchableOpacity
=======
        <CameraView style={{ flex: 1 }} type={facing} ref={cameraRef}>
          <View className="flex-1 flex-row bg-transparent">
            <TouchableOpacity
>>>>>>> 6105e323b (feat: add a taking picture function)
              className="absolute bottom-5 right-5 p-2 rounded-full bg-white"
              onPress={takePicture}
            >
              <Image className="w-10 h-10" source={camera_icon} />
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View className="flex-1 bg-lightGreen items-center flex justify-center">
          <Image source={{ uri: cameraImage }} className="w-2/3 h-2/3 mb-10" />
          <TouchableOpacity className="bg-green px-6 py-2 rounded-md">
            <Text className="text-white text-2xl">쓰레기 개수 확인하기</Text>
          </TouchableOpacity>
        </View>
<<<<<<< HEAD
        <View className="flex-1 bg-lightGreen items-center flex justify-center">
          <Image source={{ uri: cameraImage }} className="w-2/3 h-2/3 mb-10" />
          <TouchableOpacity className="bg-green px-6 py-2 rounded-md">
            <Text className="text-white text-2xl">쓰레기 개수 확인하기</Text>
          </TouchableOpacity>
        </View>
=======
        <Image source={{ uri: cameraImage }} style={{ flex: 1 }} />
>>>>>>> 6105e323b (feat: add a taking picture function)
      )}
    </View>
  );
};

export default CameraScreen;
