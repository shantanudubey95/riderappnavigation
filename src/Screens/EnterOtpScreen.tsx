import React from "react";
import { View, Text, Button } from "react-native";

const EnterOTPScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Enter OTP Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("EnterNameAndEmailScreen");
        }}
      />
    </View>
  );
};

export default EnterOTPScreen;
