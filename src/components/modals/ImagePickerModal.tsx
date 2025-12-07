import { screenHeight } from "@/src/utils/helper";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import ReactNativeModal from "react-native-modal";
const ImagePickerModal = ({
  visible,
  setVisible,
  setImageUri,
}: {
  visible: boolean;
  setVisible: any;
  setImageUri: string;
}) => {
  const onPressCamera = () => {
    setVisible(false);
    setTimeout(async () => {
      const permissionResult =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission required",
          "Permission to access the media library is required."
        );
        return;
      }

      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],

        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri || "");
      }
    }, 400);
  };
  const onPressGallery = async () => {
    setVisible(false);
    setTimeout(async () => {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission required",
          "Permission to access the media library is required."
        );
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],

        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri || "");
      }
    }, 400);
  };
  return (
    <ReactNativeModal
      useNativeDriver={true}
      isVisible={visible}
      animationOutTiming={1}
      onBackdropPress={() => {
        setVisible(false);
      }}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: screenHeight(4),
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <AntDesign
          onPress={onPressCamera}
          name="camera"
          size={24}
          color="black"
        />
        <FontAwesome
          onPress={onPressGallery}
          name="file-photo-o"
          size={24}
          color="black"
        />
      </View>
    </ReactNativeModal>
  );
};

export default ImagePickerModal;

const styles = StyleSheet.create({});
