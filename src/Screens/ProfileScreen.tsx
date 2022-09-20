import React from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen</Text>
      <Button title="Navigate to next screen" />
    </View>
  );
};

export default ProfileScreen;
