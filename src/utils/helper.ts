import { Dimensions } from "react-native";

export const screenWidth: any = (num: number) => {
  return (Dimensions.get("screen").width / 100) * num;
};
export const screenHeight = (num: number) => {
  return (Dimensions.get("screen").height / 100) * num;
};
