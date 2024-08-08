import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Plogging = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
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

  if (!location) {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={focusCurrentLocation} style={styles.button}>
          <Image
            // eslint-disable-next-line no-undef
            source={require('../../../assets/image/gps.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#3182F7',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#3182F7',
    borderRadius: 5,
    padding: 5,
  },
  buttonImage: {
    width: 18,
    height: 18,
  },
});

export default Plogging;
