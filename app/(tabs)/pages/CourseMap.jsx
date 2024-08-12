import React, { useState, useEffect, useRef } from "react";
import { View, Alert, TouchableOpacity, Image, Text } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native";
import haversine from "haversine";

const CourseMap = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [path, setPath] = useState([]);
  const [distanceTravelled, setDistanceTravelled] = useState(0);

  const { start, end } = route.params;

  const timerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("Start:", start);
    console.log("End:", end);
  }, [start, end]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.getForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "위치 권한 요청",
          "앱 사용 중에 위치 정보를 사용하도록 허용하시겠습니까?",
          [
            {
              text: "아니요",
              onPress: () =>
                setErrorMsg("Permission to access location was denied"),
              style: "cancel",
            },
            {
              text: "네",
              onPress: async () => {
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                  setErrorMsg("Permission to access location was denied");
                  return;
                }
                setHasLocationPermission(true);
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location.coords);
                setPath((prevRoute) => [
                  ...prevRoute,
                  {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                  },
                ]);

                Location.watchPositionAsync(
                  {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 1000,
                    distanceInterval: 1,
                  },
                  (newLocation) => {
                    setLocation(newLocation.coords);
                    setPath((prevRoute) => {
                      const newRoute = [
                        ...prevRoute,
                        {
                          latitude: newLocation.coords.latitude,
                          longitude: newLocation.coords.longitude,
                        },
                      ];

                      if (prevRoute.length > 0) {
                        const prevLocation = prevRoute[prevRoute.length - 1];
                        const newLocation = {
                          latitude: newRoute[newRoute.length - 1].latitude,
                          longitude: newRoute[newRoute.length - 1].longitude,
                        };

                        const distance = haversine(prevLocation, newLocation, {
                          unit: "km",
                        });
                        setDistanceTravelled(
                          (prevDistance) => prevDistance + distance
                        );
                      }

                      return newRoute;
                    });
                  }
                );
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        setHasLocationPermission(true);
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        setPath((prevRoute) => [
          ...prevRoute,
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        ]);

        Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 1,
          },
          (newLocation) => {
            setLocation(newLocation.coords);
            setPath((prevRoute) => {
              const newRoute = [
                ...prevRoute,
                {
                  latitude: newLocation.coords.latitude,
                  longitude: newLocation.coords.longitude,
                },
              ];

              if (prevRoute.length > 0) {
                const prevLocation = prevRoute[prevRoute.length - 1];
                const newLocation = {
                  latitude: newRoute[newRoute.length - 1].latitude,
                  longitude: newRoute[newRoute.length - 1].longitude,
                };

                const distance = haversine(prevLocation, newLocation, {
                  unit: "km",
                });
                setDistanceTravelled((prevDistance) => prevDistance + distance);
              }

              return newRoute;
            });
          }
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
    stopTimer(); // 시간 멈춤
    Alert.alert(
      "플로깅을 중단하시겠습니까?",
      "",
      [
        {
          text: "취소",
          onPress: () => {
            startTimer(); // 시간 재개
          },
          style: "cancel",
        },
        {
          text: "중단",
          onPress: () => {
            navigation.replace("camera");
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  if (!location) {
    return (
      <View className="flex-1">
        <MapView className="w-full h-full" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-evenly absolute top-0 w-full h-32 bg-black opacity-60 rounded items-center z-20">
        <View className="items-center px-10">
          <Text className="text-white text-xl">거리</Text>
          <Text className="text-white text-2xl font-bold">
            {distanceTravelled.toFixed(2)} km
          </Text>
        </View>
        <View className="items-center px-10">
          <Text className="text-white text-xl">시간</Text>
          <Text className="text-white text-2xl font-bold">
            {formatTime(elapsedTime)}
          </Text>
        </View>
      </View>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: start[0], // 초기 지도의 중심을 start 좌표로 설정
          longitude: start[1],
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="w-full h-full"
      >
        {/* 전달된 start와 end 좌표에 마커 표시 */}
        <Marker
          coordinate={{
            latitude: start[0],
            longitude: start[1],
          }}
          title="Start"
          description="Start Point"
        />
        <Marker
          coordinate={{
            latitude: end[0],
            longitude: end[1],
          }}
          title="End"
          description="End Point"
        />
        {path.length > 1 && (
          <Polyline
            coordinates={path}
            strokeColor="#3182F7" // 선 색상
            strokeWidth={6} // 선 두께
          />
        )}
      </MapView>

      <View className="bg-red absolute bottom-5 left-5 px-4 pt-1 pb-2 rounded z-10">
        <TouchableOpacity onPress={handleStopPlogging}>
          <Text className="text-white text-lg font-bold">||</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-blue absolute bottom-5 right-5 rounded p-3 z-10">
        <TouchableOpacity onPress={focusCurrentLocation}>
          <Image
            source={require("../../../assets/image/gps.png")}
            className="w-5 h-5"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CourseMap;
