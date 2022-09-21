import React from 'react';
import { View, Text, Button } from 'react-native';

const VerifyEmailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Verify Email Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};

export default VerifyEmailScreen;
