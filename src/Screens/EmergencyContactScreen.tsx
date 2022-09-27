import React from 'react';
import { StatusBar, View } from 'react-native';
import tw from 'twrnc';

import NavigateIconButton from '../Components/NavigateIconButton';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const EmergencyContactScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: '4%' }}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <TextRegular15>
        You can add up to 5 people. In case of emergency they will be informed
      </TextRegular15>
      <View style={tw`h-5`} />
      <NavigateIconButton
        onPress={() => {
          navigation.navigate('AccountScreen');
        }}
        isRed={false}
        title=" Add Emergency Contacts"
        icon={IMAGES.ADD}
      />
    </View>
  );
};

export default EmergencyContactScreen;
