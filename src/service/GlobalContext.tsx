import Storage from "expo-storage";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }: any) => {
  const [user, setUser] = useState(null); // this is used for the current logged in user which is object
  const [allUser, setAllUser] = useState([]); // this is used to store all registered users which will be removed after integrating with backend which us array

  const getAllUserData = async () => {
    try {
      const userDataFromStorage = await Storage.getItem({ key: "allUserData" });
      console.log(userDataFromStorage, "userDataFromStorage");

      if (userDataFromStorage !== null) {
        const parsedItem = JSON.parse(userDataFromStorage);
        setAllUser(parsedItem);
        console.log(userDataFromStorage);
      }
    } catch (error) {
      console.log("error on getting user data", error);
    }
  };
  const getCurrentUserData = async () => {
    try {
      const getCurrentUserInfo = await Storage.getItem({
        key: "currentUserData",
      });
      console.log(getCurrentUserInfo, "getCurrentUserInfo");
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
