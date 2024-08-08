/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { View, Alert, TouchableOpacity, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Plogging = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(false); // 권한 상태 추가

  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      // 권한 상태 체크
      let { status } = await Location.getForegroundPermissionsAsync();
      if (status !== 'granted') {
        // 권한이 없는 경우에만 권한 요청
        Alert.alert(
          '위치 권한 요청',
          '앱 사용 중에 위치 정보를 사용하도록 허용하시겠습니까?',
          [
            {
              text: '아니요',
              onPress: () =>
                setErrorMsg('Permission to access location was denied'),
              style: 'cancel',
            },
            {
              text: '네',
              onPress: async () => {
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                  setErrorMsg('Permission to access location was denied');
                  return;
                }
                setHasLocationPermission(true); // 권한 상태 업데이트
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location.coords);

                Location.watchPositionAsync(
                  {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 1000,
                    distanceInterval: 1,
                  },
                  (newLocation) => {
                    setLocation(newLocation.coords);
                  },
                );
              },
            },
          ],
          { cancelable: false },
        );
      } else {
        setHasLocationPermission(true); // 이미 권한이 부여된 경우
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);

        Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 1,
          },
          (newLocation) => {
            setLocation(newLocation.coords);
          },
        );
      }
    })();
  }, []);

  const focusCurrentLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  const handleStopPlogging = () => {
    Alert.alert(
      '플로깅을 중단하시겠습니까?',
      '',
      [
        {
          text: '취소',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: '중단',
          onPress: () => {
            navigation.replace('home');
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  if (!location) {
    return (
      <View className="flex-1">
        <MapView className="w-full h-full" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="absolute top-0 w-full h-60 bg-black opacity-60 rounded items-center z-20">
        <Text className="text-white text-xl py-8">총 주운 쓰레기</Text>
        <Text className="text-white text-3xl font-bold pb-6">3</Text>
        <View className="flex flex-row">
          <View className="items-center px-10">
            <Text className="text-white text-xl">거리</Text>
            <Text className="text-white text-2xl font-bold">1.3km</Text>
          </View>
          <View className="items-center  px-10">
            <Text className="text-white text-xl">시간</Text>
            <Text className="text-white text-2xl font-bold">00:34:02</Text>
          </View>
        </View>
      </View>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="w-full h-full"
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="현재 위치"
          description="여기에 있습니다"
        />
      </MapView>
      <View className="bg-red absolute bottom-5 left-5 px-4 pt-1 pb-2 rounded z-10">
        <TouchableOpacity onPress={handleStopPlogging}>
          <Text className="text-white text-lg font-bold">||</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-blue absolute bottom-5 right-5 rounded p-3 z-10">
        <TouchableOpacity onPress={focusCurrentLocation}>
          <Image
            // eslint-disable-next-line no-undef
            source={require('../../../assets/image/gps.png')}
            className="w-5 h-5"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Plogging;
