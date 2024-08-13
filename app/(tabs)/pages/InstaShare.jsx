import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const insta = require('../../../assets/image/instagramShare.png');

const InstaShare = () => {
  return (
    <SafeAreaView className="flex-1">
      <Image source={insta} className="w-full" />
    </SafeAreaView>
  );
};

export default InstaShare;
