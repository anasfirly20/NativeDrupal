import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:"white",
  },
  img: {
    width: "100%",
    height: 300,
    alignItems: "center"
  },
  content: {
    paddingHorizontal: 25,
  },
  textHeader: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: "bold"
  },
  textForgotPass: {
    marginTop: 25,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "right",
    color: "#0164ff"
  },
  buttonContainer: {
    marginTop: 25,
    width: "100%",
    backgroundColor: "#0164ff",
    borderRadius: 10,
    padding: 15
  },
  buttonLabel: {
    color:"white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600"
    
  }
});
