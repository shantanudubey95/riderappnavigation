import React from "react";
import { View, Text, Button } from "react-native";

const UpdateEmailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Update Email Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("FavoritesLocationScreen");
        }}
      />
    </View>
  );
};

export default UpdateEmailScreen;
