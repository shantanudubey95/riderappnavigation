import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Platform, Pressable, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';
type Props = {
  children: React.ReactNode;
  statusBarColor?: string;
  translucent?: boolean;
  header: boolean;
};
export default function SuggaaScreen({
  header,
  children,
  statusBarColor,
  translucent,
}: // paddingTop,
Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        tw`flex-1 px-5 bg-white`,
        {
          paddingBottom: Math.max(20, insets.bottom),
          paddingTop: header === true ? 20 : Math.max(20, insets.top),
        },
      ]}>
      <StatusBar
        translucent={translucent}
        backgroundColor={statusBarColor || 'transparent'}
        barStyle="dark-content"
      />

      <KeyboardAvoidingView
        keyboardVerticalOffset={insets.top + 50}
        {...Platform.select({
          ios: {
            behavior: 'padding',
          },
          android: undefined,
        })}
        style={{ flex: 1 }}>
        <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
          <View style={tw`bg-white flex-1`}>{children}</View>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}
