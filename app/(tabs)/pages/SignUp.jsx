/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordValid(passwordRegex.test(text));
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setIsPasswordMatch(text === password);
  };

  const handleSignUpPress = async () => {
    if (!isPasswordValid) {
      Alert.alert(
        '비밀번호 오류',
        '비밀번호는 8자 이상이어야 하며, 숫자, 영문, 특수문자를 포함해야 합니다.',
      );
      return;
    }

    if (!isPasswordMatch) {
      Alert.alert(
        '비밀번호 오류',
        '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
      );
      return;
    }

    if (!name || !area || !userId || !password || !confirmPassword) {
      Alert.alert('입력 오류', '모든 필드를 입력해주세요.');
      return;
    }

    Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
    navigation.replace('login');
  };

  const isFormValid =
    name &&
    area &&
    userId &&
    password &&
    confirmPassword &&
    isPasswordValid &&
    isPasswordMatch;

  return (
    <SafeAreaView className="bg-white flex-1">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView className="px-4 py-10">
          <Text className="text-3xl text-center mb-4">회원가입</Text>
          <View className="flex justify-center pb-4">
            <Text className="mb-2 text-xl">이름</Text>
            <TextInput
              className="border w-full p-2 rounded"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View className="mb-6">
            <Text className="mb-2 text-xl">지역</Text>
            <View className="border border-gray-400 rounded">
              <Dropdown
                style={{ padding: 10 }}
                placeholder="선택하세요"
                data={[
                  { label: '수지구', value: 'suji' },
                  { label: '기흥구', value: 'giheung' },
                  { label: '처인구', value: 'cheoin' },
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
              value={userId}
              onChangeText={(text) => setUserId(text)}
            />
          </View>
          <View className="flex justify-center pb-6">
            <Text className="mb-2 text-xl">비밀번호</Text>
            <TextInput
              className={`border w-full p-2 rounded ${
                !isPasswordValid ? 'border-coral' : ''
              }`}
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
            {!isPasswordValid && (
              <Text className="text-coral">
                비밀번호는 8자 이상이어야 하며, 숫자, 영문, 특수문자를 포함해야
                합니다.
              </Text>
            )}
          </View>
          <View className="flex justify-center pb-6">
            <Text className="mb-2 text-xl">비밀번호 확인</Text>
            <TextInput
              className={`border w-full p-2 rounded ${
                !isPasswordMatch ? 'border-coral' : ''
              }`}
              secureTextEntry
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
            {!isPasswordMatch && (
              <Text className="text-coral">비밀번호가 일치하지 않습니다.</Text>
            )}
          </View>
          <TouchableOpacity
            className={`bg-green rounded-md mt-10 ${
              !isFormValid ? 'opacity-50' : ''
            }`}
            disabled={!isFormValid}
            onPress={handleSignUpPress}
          >
            <Text className="text-center text-white py-2 text-xl shadow-xl">
              회원 가입하기
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
