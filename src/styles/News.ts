import { StyleSheet } from "react-native";

// borderWidth: 2,
// borderColor: "red",


export const newsStyle = StyleSheet.create({
    textHeader: {
    paddingHorizontal: 20,
    marginBottom: 5,
    fontSize: 35,
    fontWeight: "700"

    },
    contentContainer: {
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    marginVertical: 10,
    gap: 20,
    height: 160,
    width: 400,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 20,
    shadowOffset: {width: 4, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  

  },
  descContainer: {
    flex: 1,
    gap: 8
  },
  descTextHeader: {
    color: "#222222",
    fontSize: 20,
    fontWeight: "700",
  },
  descText: {
    color: "#767676",
    fontSize: 14,
    fontWeight: "600"
  },
  cardImage: {
    flex: 0.5,
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    borderRadius: 10
  }
})