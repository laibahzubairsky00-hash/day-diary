import CustomButton from "@/src/components/CustomButton";
import CustomTextInput from "@/src/components/CustomTextInput/CustomTextInput";
import { GlobalContext } from "@/src/service/GlobalContext";
import { COLORS } from "@/src/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { allUser, setUser } = useContext(GlobalContext);
  const signInOnPress = async () => {
    console.log(allUser);
    const userData = allUser.find(
      (item) => item.email.toLowerCase() == email.toLocaleLowerCase()
    );
    console.log(userData);
    if (userData.password == password) {
      alert("sign in success");
    }
  };
  const navigation = useNavigation<any>();
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
      <Text
        style={{ backgroundColor: "yellow" }}
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        {" "}
        sign up
      </Text>
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
