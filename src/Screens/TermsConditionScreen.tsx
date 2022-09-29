import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';

type Props = any;

export default function TermsConditionScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView contentContainerStyle={tw`flex-1 px-5 pt-5 bg-[${COLORS.WHITE}]`}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <TextSemiBold15>Terms & Conditions</TextSemiBold15>
      <View style={tw`h-1`} />
      <TextRegular15>Last updated on April 17, 2022</TextRegular15>
      <View style={tw`h-2`} />
      <TextSemiBold15>1. Acceptance of service</TextSemiBold15>
      <View style={tw`h-1.5`} />
      <TextRegular12>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Lauds PageMaker including
        versions of Lorem Ipsum.
      </TextRegular12>
      <View style={tw`h-1.5`} />
      <TextSemiBold15>1. Acceptance of service</TextSemiBold15>
      <View style={tw`h-1.5`} />
      <TextRegular12>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Lauds PageMaker including
        versions of Lorem Ipsum.
      </TextRegular12>
      <View style={tw`h-1.5`} />
      <TextSemiBold15>1. Acceptance of service</TextSemiBold15>
      <View style={tw`h-1.5`} />
      <TextRegular12>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Lauds PageMaker including
        versions of Lorem Ipsum.
      </TextRegular12>
      <View style={tw`h-1.5`} />
      <TextSemiBold15>1. Acceptance of service</TextSemiBold15>
      <View style={tw`h-1.5`} />
      <TextRegular12>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Lauds PageMaker including
        versions of Lorem Ipsum.
      </TextRegular12>
      <View style={tw`h-1.5`} />
      <TextRegular12>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Lauds PageMaker including
        versions of Lorem Ipsum.
      </TextRegular12>
      <View style={tw`h-1.5`} />
      <TextRegular12>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Lauds PageMaker including
        versions of Lorem Ipsum.
      </TextRegular12>
      <View style={tw`h-1.5`} />
      <TextRegular12>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularized in the 1960s with the release of Leeriest sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Lauds PageMaker including
        versions of Lorem Ipsum.
      </TextRegular12>
      <View style={[tw`h-2`, { paddingBottom: insets.bottom || 20 }]} />
    </ScrollView>
  );
}
