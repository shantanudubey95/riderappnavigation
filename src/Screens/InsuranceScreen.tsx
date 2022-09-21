import React from 'react';
import { View, Text, Button } from 'react-native';

const InsuranceScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Insurance Screen</Text>
      <Button title="Navigate to next screen" />
    </View>
  );
};

export default InsuranceScreen;
