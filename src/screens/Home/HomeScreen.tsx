import CustomButton from "@/src/components/CustomButton";
import { GlobalContext } from "@/src/service/GlobalContext";
import Storage from "expo-storage";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const { setUser } = useContext(GlobalContext);
  const onPressLogOut = async () => {
    await Storage.removeItem({
      key: "currentUserData",
    });
    setUser(null);
  };
  return (
    <View>
      <CustomButton buttonName="LogOut" onPress={onPressLogOut} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
