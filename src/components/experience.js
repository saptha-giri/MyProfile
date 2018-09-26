import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../Appstyles/experience"

class Experience extends React.Component {



  render() {
    const { details } = this.props;
    let experienceList = JSON.parse(details);
    const exp = experienceList.map((experienceObj,key)=>{
      return(
        <Exp experienceObj={experienceObj} key={key}/>
      )
    });

    return (
      <View>
        <Text style={styles.title}>EXPERIENCE</Text>
        {exp}
      </View>
    );
  }
}


const Exp = ({experienceObj})=>{
    return(
        <View style={styles.container}>
          <Text style={styles.subTitle}>{experienceObj.designation.toUpperCase()}</Text>
          <Text style={styles.sentance}>{experienceObj.company.toUpperCase()} - <Text style={[styles.sentance,{color:"#BD5D38"}]}>{experienceObj.duration.toUpperCase()}</Text></Text>
          <View style={styles.subContainer}>
            <Text style={styles.sentance}>{experienceObj.description}</Text>
          </View>
        </View>
    )
  }

export default Experience;
