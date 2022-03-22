import font from './../../constants/constants'
import primaryColor from './../../constants/constants'
import secondColor from './../../constants/constants'
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
    MainContainer: {
      flex: 1,
      backgroundColor: secondColor
    },
    itemContent: {
      paddingLeft: 15,
      paddingTop: 8,
      paddingBottom: 8,
      fontFamily: font
    },
    itemText: {
      fontSize: 24,
      color: 'black',
      fontFamily: font
    },
    tittle: {
      padding: 10,
      fontSize: 26,
      height: 44,
      fontFamily: font,
      height: 100
    }
  });