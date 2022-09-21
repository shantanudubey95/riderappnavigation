import React from 'react';
import { View, Text, Button } from 'react-native';

const ReferAndEarnScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Refer and Earn Screen</Text>
      <Button title="Navigate to next screen" />
    </View>
  );
};

export default ReferAndEarnScreen;
