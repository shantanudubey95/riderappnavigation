import { Canvas, Paint, Path, Skia } from '@shopify/react-native-skia';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, TouchableOpacity, Pressable } from 'react-native';

import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
type Props = {
  defaultImage: number;
  setPickedImage: any;
};

const ProfilePicture = ({ defaultImage, setPickedImage }: Props) => {
  const margin = 50;
  const strokeWidth = 10;
  const viewWidth = 150;
  const drawWidth = viewWidth - strokeWidth * 2;
  const path = Skia.Path.Make();

  const [image, setImage] = React.useState<string>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setPickedImage(result.uri);
    }
  };

  path.addArc({ x: strokeWidth, y: strokeWidth, width: drawWidth, height: drawWidth }, 30, 340);
  return (
    <Pressable
      onPress={pickImage}
      style={{
        margin,
        width: viewWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {image ? (
        <Image
          resizeMode="cover"
          source={{ uri: image }}
          style={{
            width: drawWidth,
            height: drawWidth,
            borderRadius: drawWidth,
            position: 'absolute',
          }}
        />
      ) : (
        <Image
          resizeMode="cover"
          source={defaultImage}
          style={{
            height: drawWidth,
            width: drawWidth,
            borderRadius: drawWidth,
            position: 'absolute',
          }}
        />
      )}

      <Canvas style={{ height: viewWidth, width: viewWidth, position: 'absolute' }}>
        <Path path={path} color="transparent">
          <Paint
            style="stroke"
            strokeWidth={strokeWidth}
            strokeCap="round"
            color={COLORS.SPANISH_VIRIDIAN}
          />
        </Path>
      </Canvas>
      <TouchableOpacity onPress={pickImage}>
        <Image resizeMode="contain" source={IMAGES.EDIT_ICON} style={{ bottom: -50, right: -75 }} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ProfilePicture;
