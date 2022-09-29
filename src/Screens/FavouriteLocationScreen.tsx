import React from 'react';
import { StatusBar, View } from 'react-native';
import tw from 'twrnc';

import NavigateIconButton from '../Components/NavigateIconButton';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const FavoritesLocationScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: '4%', alignItems: 'center' }}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <NavigateIconButton
        onPress={() => {
          navigation.navigate('SelectFavouriteLocationScreen');
        }}
        title="Add Home"
        icon={IMAGES.HOME}
        isRed={false}
      />
      <View style={tw`h-2`} />
      <NavigateIconButton
        onPress={() => {
          navigation.navigate('SelectFavouriteLocationScreen');
        }}
        title="Add Work"
        icon={IMAGES.WORK}
        isRed={false}
      />
      <View style={tw`h-2`} />
      <NavigateIconButton
        onPress={() => {
          navigation.navigate('SelectFavouriteLocationScreen');
        }}
        title="Add home"
        icon={IMAGES.ADD}
        isRed={false}
      />
    </View>
  );
};

export default FavoritesLocationScreen;
