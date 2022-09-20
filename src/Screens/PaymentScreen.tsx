import React from "react";
import { View, Text, Button } from "react-native";

const PaymentScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Payment Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("ProcessingPaymentScreen");
        }}
      />
    </View>
  );
};

export default PaymentScreen;
