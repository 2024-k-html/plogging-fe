/pages/Login.jsx

/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 임포트

const REST_API_KEY = 'c2aadbd04f566ec5b291ef80c14533af'; // 본인의 REST API 키로 변경
const REDIRECT_URI = 'http://172.30.1.12:8081/Home'; // 본인의 리디렉션 URI로 변경
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const Login = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  const handleKakaoLogin = () => {
    setLoginVisible(true);
  };

  function KakaoLoginWebView(data) {
    const exp = 'code=';
    const condition = data.indexOf(exp);
    if (condition !== -1) {
      const authorize_code = data.substring(condition + exp.length);
      console.log('인가 코드:', authorize_code); // 인가 코드를 터미널에 출력
      //requestToken(authorize_code);
    }
  }

  //   const requestToken = async (authorize_code) => {
  //     var AccessToken = 'none';
  //     axios({
  //       method: 'post',
  //       url: 'https://kauth.kakao.com/oauth/token',
  //       params: {
  //         grant_type: 'authorization_code',
  //         client_id: REST_API_KEY,
  //         redirect_uri: REDIRECT_URI,
  //         code: authorize_code,
  //       },
  //     })
  //       .then((response) => {
  //         AccessToken = response.data.access_token;
  //         storeData(AccessToken);
  //       })
  //       .catch(function (error) {
  //         console.log('error', error);
  //       });
  //   };

  //   const storeData = async (returnValue) => {
  //     try {
  //       await AsyncStorage.setItem('userAccessToken', returnValue);
  //     } catch (error) {
  //       console.log('error : ', error);
  //     }
  //   };

  return (
    <SafeAreaView className="flex-1 mt-10 bg-white">
      {!loginVisible ? (
        <View className="flex-1 justify-end items-center">
          <View className="w-full justify-center items-center mb-8">
            <TouchableOpacity>
              <Text>카카오 로그인</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <WebView
          style={{ flex: 1 }}
          originWhitelist={['*']}
          scalesPageToFit={false}
          source={{
            uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
          }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          javaScriptEnabled
          onMessage={(event) => KakaoLoginWebView(event.nativeEvent.url)}
        />
      )}
    </SafeAreaView>
  );
};

export default Login;

