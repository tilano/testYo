import font from './../../constants/constants'
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      fontFamily: font
    },
    containerLoad: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    },
    text: {
      fontSize: 20,
      padding: 10,
      paddingTop: 22,
      fontFamily: font
    }
  });