import { StyleSheet } from "react-native";

export default StyleSheet.create({
	about:{marginLeft: 40},
	firstname:{
		color:"#343A40",
		fontSize:60,
		fontWeight:"bold"
	},
	content:{
		color:"#868e96",
		fontSize:20
	},

	descriptionContainer:{
		// borderWidth: 1,
		marginTop: 30,
		marginRight:80
	},
	linkContainer:{
		flex:1,
		flexDirection:'row',
		margin:20,
		justifyContent:"center"
	},
	button:{
		width:80,
		height:80,
		borderWidth:2,
		margin:20,
		borderColor:"white",
		backgroundColor:"white",
		// borderRadius:80
	},
});