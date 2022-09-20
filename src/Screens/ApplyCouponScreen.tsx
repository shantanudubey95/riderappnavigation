import React from "react";
import { View, Text, Button } from "react-native";

const ApplyCouponScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Apply Coupon Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("PaymentScreen");
        }}
      />
    </View>
  );
};

export default ApplyCouponScreen;
