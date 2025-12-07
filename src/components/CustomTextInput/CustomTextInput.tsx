import { screenHeight, screenWidth } from "@/src/utils/helper";
import { COLORS } from "@/src/utils/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomTextInput = ({
  title,
  placeHolderText,
  isPassword,
  value,
  setValue,
  isEditable = true,
}: {
  title?: string;
  placeHolderText: string;
  isPassword?: boolean;
  value: string;
  setValue: any;
  isEditable?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={placeHolderText}
          secureTextEntry={showPassword}
          onChangeText={setValue}
          value={value}
          editable={isEditable}
        />
        {isPassword && (
          <AntDesign
            name={showPassword ? "eye" : "eye-invisible"}
            size={24}
            color="black"
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: { marginHorizontal: screenWidth(6), gap: screenHeight(0.5) },
  textInputContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.lightText,
    borderRadius: 15,
    alignItems: "center",
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: screenHeight(2),
  },
});
