import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../Appstyles/education"

class Education extends React.Component {

  render() {
    const { details } = this.props;
    let educationList = JSON.parse(details);
    const educationView = educationList.map((educationObj,key)=>{
      return(
        <EducationComponent educationObj={educationObj} key={key}/>
      )
    });

    return (
      <View>
        <Text style={styles.title}>EDUCATION</Text>
        {educationView}
      </View>
    );
  }
}


const EducationComponent = ({educationObj})=>{
    return(
        <View style={styles.container}>
          <Text style={styles.subTitle}>{educationObj.institute}</Text>
          <Text style={styles.sentance}>{educationObj.course} - <Text style={[styles.sentance,{color:"#BD5D38"}]}>{educationObj.duration}</Text></Text>
          <Text style={styles.sentance}>Percentage - {educationObj.percentage}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.sentance}>{educationObj.achievements}</Text>
          </View>
        </View>
    )
  }

export default Education;
