import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../screens/Auth/SignIn/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUp/SignUpScreen";

const AuthStack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignInScreen"
    >
      <stack.Screen component={SignInScreen} name="SignInScreen" />
      <stack.Screen component={SignUpScreen} name="SignUpScreen" />
    </stack.Navigator>
  );
};

export default AuthStack;
