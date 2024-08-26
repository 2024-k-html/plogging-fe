/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import useAuth from '../useAuth'; // useAuth 훅을 import

const plogging_icon = require('../../../assets/image/ploggingIcon2.png');

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // useAuth 훅에서 login 함수를 가져옴

  const handleLoginPress = async () => {
    if (!userId || !password) {
      Alert.alert('입력 오류', '아이디와 비밀번호를 모두 입력해주세요');
      return;
    }

    try {
      // 로그인 함수 호출
      await login({ id: userId, password });
      Alert.alert('로그인 성공', '로그인 되었습니다.');
      navigation.navigate('Home'); // 로그인 성공 시 홈 화면으로 이동
    } catch (error) {
      Alert.alert('로그인 오류', error.message || '로그인에 실패했습니다.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
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
              type="id"
              style={{ fontSize: 18 }}
              placeholderTextColor="#999"
              className="border-b w-full p-2 rounded"
              value={userId}
              onChangeText={(text) => setUserId(text)}
            />
          </View>
          <View className="flex justify-center pb-4">
            <TextInput
              type="password"
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
            onPress={handleLoginPress}
          >
            <Text className="text-center text-white py-4 text-xl shadow-lg">
              로그인
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
