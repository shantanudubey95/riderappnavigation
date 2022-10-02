import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';

type Props = any;

export default function UpdateNameScreen({ navigation }: Props) {
  const [name, setName] = React.useState('');

  return (
    <SuggaaScreen header>
      <View style={tw`h-4 flex-1 w-full `}>
        <SuggaaTextInput
          style={{
            alignContent: 'center',
            width: '100%',
            borderWidth: 2,
            borderColor: COLORS.SPANISH_VIRIDIAN,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: '400',
            paddingHorizontal: 13,
            paddingVertical: 10,
          }}
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
    </SuggaaScreen>
  );
}
