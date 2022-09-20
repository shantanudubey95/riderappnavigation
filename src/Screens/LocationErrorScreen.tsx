import React from "react";
import { View, Text, Button } from "react-native";

const LocationErrorScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Location Error Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("ServiceNotAvailableScreen");
        }}
      />
    </View>
  );
};

export default LocationErrorScreen;
