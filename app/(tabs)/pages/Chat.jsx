import React, { useState, useEffect, useCallback } from "react";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const send_button = require("../../../assets/image/send.png");
const aiProfile = require("../../../assets/image/ploggingIcon2.png");
const { height, width } = Dimensions.get("window");

const Chat = () => {
  const [messages, setMessages] = useState([]);

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

  const onSend = useCallback((messages = []) => {
    console.log("messages: ", messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  // Custom send button
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

  return (
    <View className="flex-1">
      <GiftedChat
        placeholder={"메세지를 입력하세요..."}
        alwaysShowSend={true}
        messages={messages}
        textInputProps={{ keyboardAppearance: "dark", autoCorrect: false }}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderSend={renderSend} // renderSend 함수 추가
      />
    </View>
  );
};

export default Chat;
