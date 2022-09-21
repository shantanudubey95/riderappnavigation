import React from 'react';
import { View, Text, Button } from 'react-native';

const EmergencyContactScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Emergency Contact Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('SelectLocationScreen');
        }}
      />
    </View>
  );
};

export default EmergencyContactScreen;
