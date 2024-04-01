import { Dimensions, StyleSheet } from "react-native";

//Main colors
export const Primarycolor1 = "#1c4b3d"; // DarkGreen
export const Primarycolor2 = "#dae2e0"; //lightgreen
export const Primarycolor3 = "#fff"; // White
export const Primarycolor4 = "#8EA59E"; //SweetGreen


//Background styles
export const Backgroundstyle = StyleSheet.create({
    informationScreens: {
      paddingTop: 50,
      alignItems: "center",
      flex: 1,
      backgroundColor: Primarycolor2,
    },
    interactive_screens: {
      paddingTop: 50,
      alignItems: "center",
      flex: 1,
      backgroundColor: Primarycolor3,
    },
    message_Screens: {
      alignItems: "center",
      flex: 1,
      backgroundColor: Primarycolor1,
    },
  });
  

  // Stylesheet like CSS
export const styles = StyleSheet.create({
    landingPageStyle: {
      flex: 1,
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    mapStyle: {
      marginTop: 40,
      width: 170 * 2,
      height: 120 * 3,
      borderRadius: 10,
      borderWidth: 1,
    },
    seperatorStyle: {
      height: 1,
      width: "100%",
      backgroundColor: "#CED0CE",
    },
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    //Headlines
    Header: {
      fontSize: 35,
      marginBottom: 20,
      marginTop: 30,
      fontFamily: "space-grotesk",
    },
    Header_Primarycolor1: {
      color: Primarycolor1,
      fontSize: 16,
      marginTop: 10,
      marginBottom: 10,
    },
    inputBox: {
        height: 45,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 15,
        borderWidth: 4,
        padding: 10,
        fontSize: 16,
        fontFamily: "space-grotesk",
        borderColor: Primarycolor1,
        backgroundColor: Primarycolor3,
        alignSelf: "stretch",
      },
});