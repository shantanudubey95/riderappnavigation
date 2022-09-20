import React from "react";
import { View, Text, Button } from "react-native";

const PaymentDoneScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Payment Done Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
    </View>
  );
};

export default PaymentDoneScreen;
