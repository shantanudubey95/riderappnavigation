import React from "react";
import { View, Text, Button } from "react-native";

const UpdateNameScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Update Name Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("UpdatePhoneNumberScreen");
        }}
      />
    </View>
  );
};

export default UpdateNameScreen;
