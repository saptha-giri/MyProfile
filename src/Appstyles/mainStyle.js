import { StyleSheet, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");

let leftPanelWidth;
let rightPanelWidth;
if (width > height) {
  leftPanelWidth = height / 3;
} else {
  leftPanelWidth = width / 3;
}
rightPanelWidth = width - leftPanelWidth;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  leftPanel: {
    width: leftPanelWidth,
    height:height,
    backgroundColor: "#BD5D38",
    alignItems: "center",
    justifyContent: "center"
  },
  rightPanel: {
    width: rightPanelWidth,
    height:height,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  linkText: {
    color: "#E5CFCD",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20
  },
  circle: {
    borderWidth: 6,
    borderColor: "#CA7D60",
    width: leftPanelWidth / 2,
    height: leftPanelWidth / 2,
    borderRadius: leftPanelWidth / 2,
    marginBottom: 20
  },
  panelContainer:{
    flex:1,
    marginLeft: 30,marginRight:10,marginTop:50 
  }
});
