import React from 'react';
import { View, Text, Button } from 'react-native';

const Payments = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Payments Screen</Text>
      <Button title="Navigate to next screen" />
    </View>
  );
};

export default Payments;
