import React from "react";
import { View, Text, Button } from "react-native";

const SelectGenderScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Select Gender Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("ProfileCreatedSplashScreen");
        }}
      />
    </View>
  );
};

export default SelectGenderScreen;
