import React from "react";
import { View, Text, Button } from "react-native";

const UpdatePhoneNumberScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Update Phone Number Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("UpdateEmailScreen");
        }}
      />
    </View>
  );
};

export default UpdatePhoneNumberScreen;
