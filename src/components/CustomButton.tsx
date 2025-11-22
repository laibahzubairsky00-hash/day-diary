import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { screenHeight, screenWidth } from "../utils/helper";
import { COLORS } from "../utils/theme";

const CustomButton = ({
  buttonName = "n/a",
  containerStyle,
  onPress,
  textStyle,
}: {
  buttonName: string;
  containerStyle?: ViewStyle;
  onPress: () => void;
  textStyle?: TextStyle;
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={textStyle}> {buttonName} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    marginHorizontal: screenWidth(8),
    padding: 10,
    paddingVertical: screenHeight(2),
    alignItems: "center",
  },
});
