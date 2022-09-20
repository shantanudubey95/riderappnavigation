import React from "react";
import { View, Text, Button } from "react-native";

const PrivacyAndTermsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Privacy And Terms Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("SplashScreen");
        }}
      />
    </View>
  );
};

export default PrivacyAndTermsScreen;
