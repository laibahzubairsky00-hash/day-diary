import CustomButton from "@/src/components/CustomButton";
import CustomTextInput from "@/src/components/CustomTextInput/CustomTextInput";
import { GlobalContext } from "@/src/service/GlobalContext";
import { COLORS } from "@/src/utils/theme";
import { useNavigation } from "expo-router";
import { Storage } from "expo-storage";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUpScreen = () => {
  const { allUser, setAllUser } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigation = useNavigation<any>();
  const signUpOnPress = async () => {
    try {
      console.log(allUser);
      const allUserValue = [...allUser, { email, password, userName }];
      setAllUser(allUserValue);
      console.log(allUserValue);
      await Storage.setItem({
        key: "allUserData",
        value: allUserValue, // automatically serialized if not a string
      });

      alert("signup successfully");
      navigation.goBack();
    } catch (error) {
      console.log(error);
      // Handle invalid keys or storage failures
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <CustomTextInput
        title="user name"
        placeHolderText="Enter your user name"
        setValue={setUserName}
        value={userName}
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
          signUpOnPress();
        }}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
