import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import NavigateIconButton from '../Components/NavigateIconButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import * as IMAGES from '../config/images';
const FavoritesLocationScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SuggaaScreen header>
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
    </SuggaaScreen>
  );
};

export default FavoritesLocationScreen;
