import React from 'react';
import { View } from 'react-native';

import TextRegular18 from '../Typography/TextRegular18';

const ProcessingPaymentScreen = ({ navigation }: { navigation: any }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('PaymentDoneScreen');
    }, 2000);
  });
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <TextRegular18>Please Wait. Verifying Payment Status</TextRegular18>
    </View>
  );
};

export default ProcessingPaymentScreen;
