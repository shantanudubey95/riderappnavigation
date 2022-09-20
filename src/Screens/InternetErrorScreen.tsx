import React from "react";
import { View, Text, Button } from "react-native";

const InternetErrorScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Internet Error Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("VerifyEmailScreen");
        }}
      />
    </View>
  );
};

export default InternetErrorScreen;
