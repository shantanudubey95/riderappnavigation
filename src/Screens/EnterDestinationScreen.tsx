import React from 'react';
import { View, Text, Button } from 'react-native';

const EnterDestinationScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter Destination Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('UpdateNameScreen');
        }}
      />
    </View>
  );
};

export default EnterDestinationScreen;
