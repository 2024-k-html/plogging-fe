import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const useAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const navigation = useNavigation();

  const isTokenValid = (token) => {
    return token !== 'undefined' && token !== null;
  };

  const loggedIn = useMemo(() => !!accessToken, [accessToken]);

  const fetchTokens = useCallback(async () => {
    const storedAccessToken = await AsyncStorage.getItem('accessToken');
    const storedRefreshToken = await AsyncStorage.getItem('refreshToken');

    if (!isTokenValid(storedAccessToken) || !isTokenValid(storedRefreshToken)) {
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      return;
    }

    setAccessToken(storedAccessToken);
    setRefreshToken(storedRefreshToken);
  }, []);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  const login = useCallback(async ({ id, password }) => {
    try {
      const response = await axios.post(
        'https://api.studyroom.computer.hufs.ac.kr/auth/login',
        {
          username: id,
          password: password,
        },
      );
      const access_token = response.data.data.access_token;
      const refresh_token = response.data.data.refresh_token;

      if (!isTokenValid(access_token) || !isTokenValid(refresh_token)) {
        throw new Error('유효하지 않는 토큰');
      }

      await AsyncStorage.setItem('accessToken', access_token);
      await AsyncStorage.setItem('refreshToken', refresh_token);

      setAccessToken(access_token);
      setRefreshToken(refresh_token);
    } catch (error) {
      //Alert.alert('Login Error', error.response.data.errorMessage || error.message);
    }
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    setAccessToken(null);
    setRefreshToken(null);
    navigation.navigate('Login');
  }, [navigation]);

  return { accessToken, refreshToken, loggedIn, login, logout };
};

export default useAuth;
