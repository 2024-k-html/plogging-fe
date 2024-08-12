import React, { useState, useEffect, useCallback } from "react";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import axios from "axios";

// 이미지 경로
const send_button = require("../../../assets/image/send.png");
const aiProfile = require("../../../assets/image/ploggingIcon2.png");
const { height, width } = Dimensions.get("window");

// API 호출 함수 - AI 모델과 통신하여 메시지를 생성
const GetMessageMaker = async (receiver, purpose, tone, more_info) => {
  try {
    const res = await axios.post(`http://127.0.0.1:5000`, {
      receiver: receiver,
      purpose: purpose,
      tone: tone,
      more_info: more_info,
    });
    return res.data.result;
  } catch (err) {
    console.log("문자 마법사 API post 에러", err);
  }
};

const Chat = () => {
  const [messages, setMessages] = useState([]);

  // 초기 메시지 설정
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "안녕하세요, 플로깅 입니다!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: aiProfile,
        },
      },
    ]);
  }, []);

  // 사용자가 메시지를 보낼 때 호출되는 함수
  const onSend = useCallback(async (messages = []) => {
    console.log("messages: ", messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    // API 호출: 사용자가 보낸 메시지를 기반으로 AI 응답 생성
    const userMessage = messages[0].text; // 사용자가 보낸 메시지
    const aiResponse = await GetMessageMaker(userMessage, "일반", "친근함", ""); // AI 응답 요청

    // AI의 응답을 새로운 메시지로 추가
    const newMessage = {
      _id: Math.random().toString(),
      text: aiResponse || "응답을 받을 수 없습니다.", // API 응답이 없을 경우 기본 메시지
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "AI",
        avatar: aiProfile, // AI의 아바타 이미지
      },
    };

    // AI 응답 메시지를 채팅에 추가
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [newMessage])
    );
  }, []);

  // 메시지 전송 버튼 렌더링
  const renderSend = (props) => {
    return (
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
        onPress={() => {
          if (props.text && props.onSend) {
            props.onSend({ text: props.text.trim() }, true);
          }
        }}
      >
        <Image source={send_button} style={{ height: 28, width: 28 }} />
      </TouchableOpacity>
    );
  };

  // 사용자와 AI의 메시지 버블 스타일 설정
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#2DB400", // 사용자 메시지 배경색
          },
        }}
      />
    );
  };

  return (
    <View className="flex-1 bg-white">
      <GiftedChat
        placeholder={"메세지를 입력하세요..."}
        alwaysShowSend={true}
        messages={messages}
        textInputProps={{ keyboardAppearance: "dark", autoCorrect: false }}
        onSend={(messages) => onSend(messages)} // 메시지 전송 처리
        user={{
          _id: 1, // 현재 사용자의 ID
        }}
        renderSend={renderSend} // 전송 버튼 커스터마이즈
        renderBubble={renderBubble} // 메시지 버블 커스터마이즈
      />
    </View>
  );
};

export default Chat;
