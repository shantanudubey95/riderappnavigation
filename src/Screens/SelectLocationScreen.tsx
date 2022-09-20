import React from "react";
import { View, Text, Button } from "react-native";

const SelectLocationScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Select Location Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("EmergencyContactScreen");
        }}
      />
    </View>
  );
};

export default SelectLocationScreen;
