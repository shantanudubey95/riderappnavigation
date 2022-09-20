import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("LocationErrorScreen");
        }}
      />
    </View>
  );
};

export default HomeScreen;
