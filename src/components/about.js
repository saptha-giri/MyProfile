import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../Appstyles/about"

class About extends React.Component {

  onPressButton = ()=>{
    window.open("https://www.linkedin.com/in/sapthagiri-r-702473a6/");
  }

  onGitPress = ()=>{
    window.open("https://github.com/saptha-giri");
  }

  render() {
    const { details } = this.props;
    let aboutObj = JSON.parse(details);
    console.log(aboutObj);
    return (
      <View style={styles.about}>
      <View style={{
        alignItems:"center"
      }}>
        <Text style={styles.firstname}>
          {aboutObj.name.toUpperCase()}
        </Text>
        <Text style={{fontSize:30,fontWeight:"bold",color:"#BD5D38"}}>
          {aboutObj.expert.toUpperCase()}
        </Text>
        <Text style={[styles.content,{color:"#BD5D38",fontWeight:"bold"}]}>
          {aboutObj.email.toUpperCase()}
        </Text>
        <Text style={[styles.content,{fontWeight:'bold'}]}>
          {aboutObj.phone.toUpperCase()}
        </Text>
      </View>
        
        <View style={styles.descriptionContainer}>
        	<Text style={styles.content}>{aboutObj.about}</Text>
        </View>

        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={this.onPressButton}>
          <Image
            style={styles.button}
            source={require('../Assets/li-orange.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onGitPress}>
          <Image
            style={styles.button}
            source={require('../Assets/github-orange.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity onPress={
            ()=>window.open("https://www.instagram.com/saptha0808/?hl=en")
          }>
          <Image
            style={styles.button}
            source={require('../Assets/insta-orange.png')}
          />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default About;
