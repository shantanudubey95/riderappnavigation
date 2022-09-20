import React from "react";
import { View, Text, Button } from "react-native";

const ProcessingPaymentScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Processing Payment Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("PaymentDoneScreen");
        }}
      />
    </View>
  );
};

export default ProcessingPaymentScreen;
