import CustomButton from "@/src/components/CustomButton";
import CustomTextInput from "@/src/components/CustomTextInput/CustomTextInput";
import { GlobalContext } from "@/src/service/GlobalContext";
import Storage from "expo-storage";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { user, setUser } = useContext(GlobalContext);
  const [profileName, setProfileName] = useState(user.userName);
  // console.log(user);
  const onPressSave = () => {
    console.log(user);
  };
  const onPressLogOut = async () => {
    await Storage.removeItem({
      key: "currentUserData",
    });
    setUser(null);
  };
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/AppIcon.png")}
        />
        <CustomTextInput
          placeHolderText="Enter Name"
          value={profileName}
          setValue={setProfileName}
        />
        <CustomTextInput
          value={user.email}
          setValue={null}
          placeHolderText="enter email"
          isEditable={false}
        />
      </View>
      <CustomButton buttonName="save changes" onPress={onPressSave} />
      <CustomButton buttonName="LogOut" onPress={onPressLogOut} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    alignSelf: "center",
    alignItems: "center",
    width: 100,
    height: 100,
  },
});
