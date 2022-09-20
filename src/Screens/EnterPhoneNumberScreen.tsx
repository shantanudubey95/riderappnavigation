import React from "react";
import { View, Text, Button } from "react-native";

const EnterPhoneNumberScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Enter Phone Number Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("EnterOTPScreen");
        }}
      />
    </View>
  );
};

export default EnterPhoneNumberScreen;
