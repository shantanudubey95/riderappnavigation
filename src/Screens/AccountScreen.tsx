import React from "react";
import { View, Text, Button } from "react-native";

const AccountScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("UpdateNameScreen");
        }}
      />
    </View>
  );
};

export default AccountScreen;
