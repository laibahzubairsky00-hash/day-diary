import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../screens/Auth/SignIn/SignInScreen";

const RootStack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen component={SignInScreen} name="SignInScreen" />
    </stack.Navigator>
  );
};

export default RootStack;
