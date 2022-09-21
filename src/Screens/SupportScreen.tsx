import React from 'react';
import { View, Text, Button } from 'react-native';

const SupportScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Support Screen</Text>
      <Button title="Navigate to next screen" />
    </View>
  );
};

export default SupportScreen;
