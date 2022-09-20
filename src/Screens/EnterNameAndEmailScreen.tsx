import React from "react";
import { View, Text, Button } from "react-native";

const EnterNameAndEmailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Enter Name & Email Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("SelectGenderScreen");
        }}
      />
    </View>
  );
};

export default EnterNameAndEmailScreen;
