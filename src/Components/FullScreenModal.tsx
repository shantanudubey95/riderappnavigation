import React from 'react';
import { Modal, ViewProps, View, StyleSheet } from 'react-native';
import tw from 'twrnc';

// import * as COLORS from '../config/colors';

type props = ViewProps & {
  showModal: boolean;
  onClose?: () => void;
};
export default function FullScreenModal({ onClose, children, showModal }: props) {
  const [modalVisible, setModalVisible] = React.useState(showModal);
  return (
    <Modal
      animationType="fade"
      transparent
      visible={showModal}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={[
          tw`flex-1 justify-center items-center px-5`,
          { backgroundColor: 'rgba(0,0,0,0.75)' },
        ]}>
        <View style={[styles.modalView, tw`w-full py-12.5 rounded-md bg-white items-center`]}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    // backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
