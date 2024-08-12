import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const sampleData = [
  {
    ranking: 1,
    name: "박종혁",
    point: 1201,
  },
  {
    ranking: 2,
    name: "장익범",
    point: 935,
  },
  {
    ranking: 3,
    name: "전병환",
    point: 746,
  },
  {
    ranking: 4,
    name: "조윤주",
    point: 718,
  },
  {
    ranking: 5,
    name: "김지원",
    point: 676,
  },
  {
    ranking: 6,
    name: "황병훈",
    point: 549,
  },
  {
    ranking: 892,
    name: "이서연",
    point: 30,
  },
];

const Ranking = () => {
  const top3 = sampleData.slice(0, 3);
  const others = sampleData.slice(3);

  return (
    <SafeAreaView style={styles.safeAreaView} className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="border-b border-gray py-4 items-center">
        <Text className="text-xl">포인트 랭킹</Text>
      </View>
      <ScrollView className="flex-1">
        <View style={styles.topRakingContainer} className="py-12">
          <View className="flex-row justify-center items-end">
            {top3.map((item, index) => {
              let height, bgColorStyle, circleColorStyle;

              // 1등
              if (index === 1) {
                bgColorStyle = styles.firstPlace;
                height = "h-48";
                circleColorStyle = styles.firstPlaceCircle;
              }
              // 2등
              else if (index === 0) {
                bgColorStyle = styles.secondPlace;
                height = "h-36";
                circleColorStyle = styles.secondPlaceCircle;
              }
              // 3등
              else if (index == 2) {
                bgColorStyle = styles.thirdPlace;
                height = "h-28";
                circleColorStyle = styles.thirdPlaceCircle;
              }

              return (
                <View
                  key={index}
                  className={`w-24 ${height} items-center pt-3`}
                  style={bgColorStyle}
                >
                  <Text className="mb-1 text-lg font-bold">{item.name}</Text>
                  <Text className="mb-1 text-lg">{item.point}점</Text>
                  <View
                    className={`w-6 h-6 rounded-full items-center justify-center mb-2`}
                    style={circleColorStyle}
                  >
                    <Text className="text-sm">{index + 1}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View className="bg-white py-2 items-center">
          <View className="flex flex-row justify-around w-11/12 border py-4 mb-3 rounded-xl">
            <Text className="text-lg">{sampleData[6].ranking}</Text>
            <Text className="text-lg">{sampleData[6].name}</Text>
            <Text className="text-lg">{sampleData[6].point}점</Text>
          </View>
          {others.map((item, index) => (
            <View key={index} className="flex-row justify-between w-3/4 py-2">
              <Text className="text-lg">{item.ranking}등</Text>
              <Text className="text-lg">{item.name}</Text>
              <Text className="text-lg">{item.point}점</Text>
            </View>
          ))}
          <Text className="text-lg">...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#fff",
  },
  topRakingContainer: {
    backgroundColor: "#c9e4fc",
  },
  firstPlace: {
    backgroundColor: "#F5CE17", // 1등 컨테이너
  },
  secondPlace: {
    backgroundColor: "#B5B9C4", // 2등 컨테이너
  },
  thirdPlace: {
    backgroundColor: "#EE7E34", // 3등 컨테이너
  },
  firstPlaceCircle: {
    backgroundColor: "#FFF9C4", // 1등 동그라미
  },
  secondPlaceCircle: {
    backgroundColor: "#ECEFF1", // 2등 동그라미
  },
  thirdPlaceCircle: {
    backgroundColor: "#FFE0B2", // 3등 동그라미
  },
});

export default Ranking;
