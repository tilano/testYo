import font from './../../constants/constants'
import primaryColor from './../../constants/constants'
import secondColor from './../../constants/constants'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      fontFamily: font
    },
    navigationContainer: {
      backgroundColor: primaryColor
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center",
      fontFamily: font
    },
    secondButton: {
      marginBottom: 20,
      marginTop: 20,
      paddingBottom: 20,
      padding: 17,
      fontFamily: font
    },
    containerMaps: {
      width: "100%",
      height: 400,
    },
    dateTime:{
      padding: 16,
      fontSize: 24,
      textAlign: "center",
      fontFamily: font
    }
  });