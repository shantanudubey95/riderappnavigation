import React from 'react';
import { ScrollView } from 'react-native';
import tw from 'twrnc';

import InviteCard from '../Components/InviteCard';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
// type Props = any;

export default function InvitePendingScreen() {
  return (
    <ScrollView contentContainerStyle={tw`flex-1 p-5 bg-[${COLORS.WHITE}]`}>
      <InviteCard name="Rajat Kumar" image={IMAGES.PIC26} status="Pending" amount={25} />
      <InviteCard name="Rajat Kumar" image={IMAGES.PIC26} status="Pending" amount={25} />
      <InviteCard name="Rajat Kumar" image={IMAGES.PIC26} status="Pending" amount={25} />
      <InviteCard name="Rajat Kumar" image={IMAGES.PIC26} status="Pending" amount={25} />
      <InviteCard name="Rajat Kumar" image={IMAGES.PIC26} status="Pending" amount={25} />
    </ScrollView>
  );
}
