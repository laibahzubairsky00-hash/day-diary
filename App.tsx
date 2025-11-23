import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import RootStack from "./src/navigation/RootStack";
import { GlobalProvider } from "./src/service/GlobalContext";

const App = () => {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <RootStack />
      </GlobalProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
