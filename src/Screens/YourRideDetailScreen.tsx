import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

import * as COLORS from '../config/colors';
const YourRideDetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <Text>YourRideDetailScreen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('RideSupportScreen');
        }}
      />
    </View>
  );
};

export default YourRideDetailScreen;
