import React from "react";
import { View, Text, Button } from "react-native";

const ServiceNotAvailableScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Service Not Available Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("InternetErrorScreen");
        }}
      />
    </View>
  );
};

export default ServiceNotAvailableScreen;
