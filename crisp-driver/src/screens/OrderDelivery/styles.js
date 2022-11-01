import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  handleIndicator: {
    backgroundColor: "grey",
    width: 100,
  },
  handleIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
    marginBottom: 20,
  },
  routeDetailsText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  deliveryDetailsContainer: {
    paddingHorizontal: 20,
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: "500",
    letterSpacing: 0.5,
    paddingVertical: 20,
  },
  addressContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  addressText: {
    fontSize: 18,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginLeft: 15,
  },
  orderDetailsContainer: {
    borderTopWidth: 1,
    borderColor: "lightgrey",
    paddingTop: 20,
  },
  orderItemText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#3FC060",
    marginTop: 200,
    marginVertical: 30,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    padding: 15,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});
