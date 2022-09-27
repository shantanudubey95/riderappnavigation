import React from 'react';
import { StatusBar, View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';
import { ROOT_VIEW_STYLE } from '../config/utils';

type Props = any;

export default function UpdateNameScreen({ navigation }: Props) {
  const [name, setName] = React.useState('');

  return (
    <View style={ROOT_VIEW_STYLE}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <View style={tw`h-4 flex-1 w-full `}>
        <SuggaaTextInput
          style={
            // tw`content-center w-full border-2 border-[${COLORS.SPANISH_VIRIDIAN}] rounded-1.75 text-xl font-normal px-3 py-2.5`
            {
              alignContent: 'center',
              width: '100%',
              borderWidth: 2,
              borderColor: COLORS.SPANISH_VIRIDIAN,
              borderRadius: 5,
              fontSize: 20,
              fontWeight: '400',
              paddingHorizontal: 13,
              paddingVertical: 10,
            }
          }
          label="Full name"
          selectionColor={COLORS.SPANISH_VIRIDIAN}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View style={tw`h-6`} />
        <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}] text-center`}>
          This name will be shown{'\n'}to the drivers.
        </TextRegular15>
        <View style={tw`flex-1`} />
        <SuggaaButton
          text="Update"
          buttonType={name ? 'FILLED' : 'DISABLED'}
          onPress={() => navigation.navigate('AccountScreen', { name })}
        />
      </View>
    </View>
  );
}
