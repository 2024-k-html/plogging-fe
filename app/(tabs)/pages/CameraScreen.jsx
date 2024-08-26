import React, { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera'; // CameraView 대신 Camera 사용
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import * as FileSystem from 'expo-file-system'; // 파일 시스템 접근을 위한 모듈
import * as MediaLibrary from 'expo-media-library'; // 파일 저장을 위한 모듈
import axios from 'axios'; // axios를 이용해 API 요청을 보냅니다.

const camera_icon = require('../../../assets/image/camera.png');

const CameraScreen = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [cameraImage, setCameraImage] = useState(null);
  const [localUri, setLocalUri] = useState(null);

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
        const photo = await cameraRef.current.takePictureAsync();
        setCameraImage(photo.uri);

        // 사진을 기기에 저장하기
        const asset = await MediaLibrary.createAssetAsync(photo.uri);
        const assetInfo = await MediaLibrary.getAssetInfoAsync(asset);
        setLocalUri(assetInfo.localUri);

        console.log('Photo saved at:', assetInfo.localUri);
      } catch (error) {
        console.error(error);
        Alert.alert('실패', '사진 찍기에 실패했습니다.');
      }
    }
  };

  const handleUpload = async () => {
    if (localUri) {
      try {
        const formData = new FormData();
        formData.append('imageFile', {
          uri: localUri,
          name: 'photo.jpg', // 임의의 파일 이름
          type: 'image/jpeg', // 이미지 MIME 타입
        });

        const response = await axios.post(
          'http://222.232.240.42:8082/activities',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        // 응답 처리
        if (response.status === 201) {
          Alert.alert('성공', '이미지가 성공적으로 업로드되었습니다.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('실패', '이미지 업로드에 실패했습니다.');
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {!cameraImage ? (
        <CameraView style={{ flex: 1 }} type={facing} ref={cameraRef}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'transparent',
            }}
          >
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                padding: 10,
                borderRadius: 50,
                backgroundColor: 'white',
              }}
              onPress={takePicture}
            >
              <Image style={{ width: 40, height: 40 }} source={camera_icon} />
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#90ee90',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: cameraImage }}
            style={{ width: '66%', height: '66%', marginBottom: 20 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              paddingHorizontal: 24,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={takePicture}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>사진 다시 찍기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              paddingHorizontal: 24,
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={handleUpload}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>사진 업로드</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
