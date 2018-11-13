import { StyleSheet } from "react-native";

export default StyleSheet.create({
	title:{
		color:"#343A40",
		fontSize:40,
		fontWeight:"bold",
		alignSelf:"center"
	},
	subTitle:{
		color:"#BD5D38",
		fontSize:20,
		alignSelf:'center',
		fontWeight:"bold"
	},
	sentance:{
		color:"#868e96",
		fontSize:18
	},

	mainContainer:{flex:1,flexDirection:"row",marginLeft:40},

	container:{
		margin:20,
		borderWidth:1,
		borderColor:"#BD5D38",
		borderRadius:2
	},
	headerContainer:{
		backgroundColor:"#fff",
		padding:10
	},
	bodyContainer:{
		alignItems:'center',
		padding:20,
	},

	imageStyle:{
		width:300,
		height:500,
		alignSelf:"center"
	}
});