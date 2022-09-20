import React from "react";
import { View, Text, Button } from "react-native";

const SplashScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SplashScreen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("EnterPhoneNumberScreen");
        }}
      />
    </View>
  );
};

export default SplashScreen;
