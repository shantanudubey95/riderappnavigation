import React from "react";
import { View, Text, Button } from "react-native";

const FavoritesLocationScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Favorite Location Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("EmergencyContactScreen");
        }}
      />
    </View>
  );
};

export default FavoritesLocationScreen;
