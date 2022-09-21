import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Screen</Text>
      <Button title="Navigate to next screen" />
    </View>
  );
};

export default AboutScreen;
