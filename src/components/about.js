import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "../Appstyles/about"

class About extends React.Component {
  render() {
    const { details } = this.props;
    let aboutObj = JSON.parse(details);
    console.log(aboutObj);
    return (
      <View style={styles.about}>
        <Text style={styles.firstname}>{aboutObj.name.toUpperCase()}</Text>
        <Text style={styles.content}>{aboutObj.address.toUpperCase()} <Text style={[styles.content,{color:"#BD5D38"}]}>{aboutObj.email.toUpperCase()}</Text></Text>
        <View style={styles.descriptionContainer}>
        	<Text style={styles.content}>{aboutObj.about}</Text>
        </View>

        <View style={styles.descriptionContainer}>
        	
        </View>
      </View>
    );
  }
}

export default About;
