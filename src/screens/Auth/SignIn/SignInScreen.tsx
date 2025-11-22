import CustomButton from "@/src/components/CustomButton";
import CustomTextInput from "@/src/components/CustomTextInput/CustomTextInput";
import { COLORS } from "@/src/utils/theme";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInOnPress = () => {
    alert(email);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <Image
        style={styles.image}
        source={require("../../../assets/AppIcon.png")}
      />
      <CustomTextInput
        title="Email"
        placeHolderText="Enter your email"
        setValue={setEmail}
        value={email}
      />
      <CustomTextInput
        title="Password"
        placeHolderText="Enter your password"
        isPassword={true}
        setValue={setPassword}
        value={password}
      />
      <CustomButton
        buttonName="continue"
        containerStyle={{ backgroundColor: COLORS.primary, marginTop: 10 }}
        onPress={() => {
          signInOnPress();
        }}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    alignSelf: "center",
    backgroundColor: COLORS.primary,
  },
});
