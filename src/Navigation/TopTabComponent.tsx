import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Pressable, ScrollView, Dimensions } from 'react-native';
import tw from 'twrnc';

import TextMedium20 from '../Typography/TextMedium20';
import * as COLORS from '../config/colors';

export default function TopTabComponent({
  state,
  descriptors,
  navigation,
  position,
  layout,
}: MaterialTopTabBarProps) {
  const scrollRef = React.useRef();
  return (
    <View style={tw`bg-[${COLORS.WHITE}] items-center`}>
      <ScrollView
        horizontal
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`bg-[${COLORS.WHITE}] min-w-[${
          Dimensions.get('window').width / 4
        }] self-stretch h-11.25  `}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          scrollRef?.current?.scrollTo({
            x: state.index * (layout.width / 4.5),
            y: 0,
            animated: true,
          });
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={label.toString()}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={tw`px-7 flex-1 items-center justify-center  ${
                isFocused ? `border-b-2  border-[${COLORS.SPANISH_VIRIDIAN}]` : ''
              } h-11.25`}>
              <TextMedium20
                style={tw`text-[${
                  isFocused ? COLORS.SPANISH_VIRIDIAN : COLORS.LIGHT_GRAY_BORDER
                }]`}>
                {label.toString()}
              </TextMedium20>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
