import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTab from "./BottomTab";

const MainStack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen component={BottomTab} name="BottomTab" />
    </stack.Navigator>
  );
};

export default MainStack;
