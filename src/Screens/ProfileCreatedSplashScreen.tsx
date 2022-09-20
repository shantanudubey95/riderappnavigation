import React from "react";
import { View, Text, Button } from "react-native";

const ProfileCreatedSplashScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Created Splash Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate("PrivacyAndTermsScreen");
        }}
      />
    </View>
  );
};

export default ProfileCreatedSplashScreen;
