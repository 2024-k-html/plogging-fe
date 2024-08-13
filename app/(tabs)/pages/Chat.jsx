import React, { useState, useEffect, useCallback } from 'react';
import { View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

// 이미지 경로
const send_button = require('../../../assets/image/send.png');
const aiProfile = require('../../../assets/image/ploggingIcon2.png');
const { height, width } = Dimensions.get('window');

// 플로깅 장소와 좌표
const plogging_places = {
  // 처인구
  처인: {
    '김량장역 - 용인중앙시장역': [
      [37.237293, 127.198671],
      [37.23789, 127.209046],
    ],
    '용인시청 - 명지대역': [
      [37.240608, 127.1772935],
      [37.238043, 127.190298],
    ],
    '고진역 - 보평역': [
      [37.244643, 127.214168],
      [37.262406, 127.223526],
    ],
    '남사 시민 야구장 - 이진봉': [
      [37.1116777, 127.1635253],
      [37.1666241, 127.2152553],
    ],
  },
  // 수지구
  수지: {
    '수지우체국 - 죽전역': [
      [37.3211906, 127.0968207],
      [37.324583, 127.107398],
    ],
    '동천자연식물원 - 동천동우체국': [
      [37.3372303, 127.0792004],
      [35.93203889999999, 128.5580582],
    ],
    '홍천말근린공원 - 수지생태공원': [
      [37.3219386107881, 127.078148702136],
      [37.324076, 127.0862177],
    ],
    '신라초등학교 - 신정공원': [
      [37.1116777, 127.1635253],
      [37.3198793, 127.0943951],
    ],
  },
  // 기흥구
  기흥: {
    '기흥역 - 강남대역': [
      [37.275657, 127.115944],
      [37.270197, 127.126007],
    ],
    '기흥역 - 신갈역': [
      [37.2782, 127.1265],
      [37.286127, 127.111311],
    ],
    '구성역 - 보정역': [
      [37.299013, 127.105664],
      [37.312747, 127.108232],
    ],
    '마북 근린공원 - 구성역': [
      [37.2979795, 127.1144222],
      [37.299013, 127.105664],
    ],
  },
};

// 코스명을 기반으로 코스를 추천하는 함수
const findCourseByName = (userQuery) => {
  for (const district in plogging_places) {
    for (const course in plogging_places[district]) {
      if (userQuery.includes(course.split(' - ')[1])) {
        return course;
      }
    }
  }
  return null;
};

// 구 단위로 코스를 추천하는 함수
const recommendPloggingPlace = (userQuery) => {
  const query = userQuery.toLowerCase();

  // 우선 코스명을 기준으로 검색
  const courseByName = findCourseByName(userQuery);
  if (courseByName) {
    const distance = Math.random().toFixed(2) * 5;
    return `${courseByName}을(를) 추천합니다. 이 코스의 거리는 약 ${distance}km입니다.`;
  }

  // 구 단위로 검색
  let selectedDistrict;
  if (query.includes('수지')) {
    selectedDistrict = plogging_places.수지;
  } else if (query.includes('기흥')) {
    selectedDistrict = plogging_places.기흥;
  } else if (query.includes('처인')) {
    selectedDistrict = plogging_places.처인;
  }

  if (selectedDistrict) {
    const places = Object.keys(selectedDistrict);
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    const distance = Math.random().toFixed(2) * 5;
    return `${randomPlace}을(를) 추천합니다. 이 코스의 거리는 약 ${distance}km입니다.`;
  } else {
    return '추천할 플로깅 코스를 찾지 못했습니다. 어디 구에 거주하시나요?';
  }
};

const Chat = () => {
  const [messages, setMessages] = useState([]);

  // 초기 메시지 설정
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '안녕하세요, 플로깅 챗봇입니다! 플로깅 장소를 추천해 드릴게요. 원하는 출발지나 도착지를 말씀해 주세요.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Plogging Bot',
          avatar: aiProfile,
        },
      },
    ]);
  }, []);

  // 사용자가 메시지를 보낼 때 호출되는 함수
  const onSend = useCallback((messages = []) => {
    // 사용자가 보낸 메시지를 콘솔에 출력
    const userMessage = messages[0].text; // 사용자가 보낸 메시지
    console.log('User sent message: ', userMessage);

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );

    // 사용자가 보낸 메시지를 기반으로 플로깅 장소 추천
    const aiResponse = recommendPloggingPlace(userMessage); // 장소 추천

    // AI의 응답을 새로운 메시지로 추가
    const newMessage = {
      _id: Math.random().toString(),
      text:
        aiResponse || '추천할 장소가 없습니다. 다른 키워드로 시도해 주세요.', // 추천 응답
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Plogging Bot',
        avatar: aiProfile, // AI의 아바타 이미지
      },
    };

    // AI 응답 메시지를 채팅에 추가
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [newMessage]),
    );
  }, []);

  // 메시지 전송 버튼 렌더링
  const renderSend = (props) => {
    return (
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
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
            backgroundColor: '#2DB400', // 사용자 메시지 배경색
          },
        }}
      />
    );
  };

  return (
    <View className="flex-1 bg-white">
      <GiftedChat
        placeholder={'메세지를 입력하세요...'}
        alwaysShowSend={true}
        messages={messages}
        textInputProps={{ keyboardAppearance: 'dark', autoCorrect: false }}
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
