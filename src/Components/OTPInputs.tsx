import { getStringAsync } from 'expo-clipboard';
import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import tw from 'twrnc';

import * as COLORS from '../config/colors';
interface Props {
  numberOfInputs: 4 | 6;
  setOTP: (otp: string) => void;
}
export default function OTPInputs({ numberOfInputs, setOTP }: Props) {
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const textInputRefs = Array.from({ length: numberOfInputs }).map(() =>
    React.createRef<TextInput>()
  );
  const [pin, setPin] = useState<string[]>(Array.from({ length: numberOfInputs }).map(() => ''));
  useEffect(() => {
    if (pin && pin.join('').length === numberOfInputs) setOTP(pin.join(''));
    else setOTP('');
  }, [pin]);
  const onKeyPress = useCallback(
    (index: number | undefined) =>
      ({ nativeEvent: { key: keyValue } }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (
          Array.from({ length: 10 })
            .map((_, index) => index.toString())
            .includes(keyValue)
        ) {
          setPin((value) => [...value.slice(0, index), keyValue, ...value.slice(index + 1)]);
          setDirection('forward');
        } else if (keyValue === 'Backspace') {
          setPin((value) => [
            ...value.slice(0, index),
            ...Array.from({ length: numberOfInputs - index }).map(() => ''),
          ]);
          setDirection('back');
        }
      },
    [numberOfInputs]
  );
  useEffect(() => {
    let activeIndex = -1;
    for (let index = 0; index < pin.length; index++) {
      const value = pin[index];
      if (value !== '') {
        activeIndex = index;
      } else {
        break;
      }
    }
    if (direction === 'back' && activeIndex >= 0 && activeIndex <= numberOfInputs - 1) {
      textInputRefs[activeIndex].current?.focus();
    } else if (activeIndex + 1 >= 0 && activeIndex + 1 <= numberOfInputs - 1) {
      textInputRefs[activeIndex + 1].current?.focus();
    }
  }, [direction, numberOfInputs, pin, textInputRefs]);
  const onChangeText = useCallback(
    (index: number) => (text: string) => {
      getStringAsync().then((textInClipboard: string) => {
        if (
          textInClipboard.length === numberOfInputs &&
          /[0-9]{4}/g.test(textInClipboard) &&
          text === textInClipboard &&
          index === 0
        ) {
          setPin(textInClipboard.split(''));
        }
      });
    },
    [numberOfInputs]
  );
  return (
    <View style={tw`w-full flex-row justify-center items-center `}>
      {textInputRefs.map((value, index) => (
        <TextInput
          key={`textinput-${index}`}
          style={[
            tw`border-2 rounded-md border-2 border-[${COLORS.SPANISH_VIRIDIAN}] h-12 w-12 mx-2.5 `,
            { fontFamily: 'Poppins_400Regular', fontSize: 20, textAlign: 'center', lineHeight: 30 },
          ]}
          keyboardType="numeric"
          textAlign="center"
          selectionColor={COLORS.SPANISH_VIRIDIAN}
          ref={value}
          autoFocus={index === 0}
          onKeyPress={onKeyPress(index)}
          onChangeText={onChangeText(index)}
          returnKeyType={index === numberOfInputs - 1 ? 'done' : 'next'}
          value={pin[index].toString()}
        />
      ))}
    </View>
  );
}
