import React, { useContext } from "react";
import { GlobalContext } from "../service/GlobalContext";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const RootStack = () => {
  const { user } = useContext(GlobalContext);
  return <>{user ? <MainStack /> : <AuthStack />} </>;
};

export default RootStack;
