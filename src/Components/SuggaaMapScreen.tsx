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
export default function SuggaaMapScreen({ children }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[tw`flex-1 bg-white`]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

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
          <View style={tw`bg-white flex-1 `}>{children}</View>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}
