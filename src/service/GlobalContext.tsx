import Storage from "expo-storage";
import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [allUser, setAllUser] = useState([]);
  const getAllUserData = async () => {
    try {
      const userDataFromStorage = await Storage.getItem({ key: "allUserData" });
      if (userDataFromStorage !== null) {
        const parsedItem = JSON.parse(userDataFromStorage);
        setAllUser(parsedItem);
      }
    } catch (error) {
      console.log("error on getting user data", error);
    }
  };
  const getCurrentUserData = async () => {
    try {
      const getCurrentUserInfo = await Storage.getItem({ key: "currentUser" });
      if (getCurrentUserInfo !== null) {
        const parsedItem = JSON.parse(getCurrentUserInfo);
        setUser(parsedItem);
      }
    } catch (error) {
      console.log("error on getting user data", error);
    }
  };
  useEffect(() => {
    getAllUserData();
    getCurrentUserData();
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser, allUser, setAllUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
