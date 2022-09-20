import React from "react";
import { View, Text, Button } from "react-native";

const OTPLimitScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>OTP Limit Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("ApplyCouponScreen");
        }}
      />
    </View>
  );
};

export default OTPLimitScreen;
