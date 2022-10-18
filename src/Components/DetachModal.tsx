import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import tw from 'twrnc';

import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import SuggaaTextInput from './SuggaaTextInput';
const height = Dimensions.get('window').height;
const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        handleIndicatorStyle={{ backgroundColor: 'white' }}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        // add bottom inset to elevate the sheet
        bottomInset={height}
        // set `detached` to true
        detached
        style={styles.sheetContainer}>
        <View style={tw`w-full px-2.5`}>
          <TextSemiBold18 style={tw`text-center`}>Enter email to send invoice</TextSemiBold18>
          <View style={tw`mt-4.25`} />
          <SuggaaTextInput label="Email" />
          <View style={tw`flex-row mt-9.5`}>
            <View style={tw`flex-1 items-center justify-center`}>
              <TextRegular15 style={tw`text-[${COLORS.BLUE}]`}>Cancel</TextRegular15>
            </View>
            <View style={tw`flex-1 items-center justify-center`}>
              <TextRegular15 style={tw`text-[${COLORS.BLUE}]`}>Send</TextRegular15>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'grey',
  },
  sheetContainer: {
    // add horizontal space
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
