import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../Appstyles/skills"

class Skills extends React.Component {

  render() {
    const { details } = this.props;
    let skillsObj = JSON.parse(details);

    const frontend = skillsObj.frontend.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> {data}</Text>
      )
    });

    const backend = skillsObj.backend.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> {data}</Text>
      )
    });

    const database = skillsObj.database.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> {data}</Text>
      )
    });

    const other = skillsObj.other.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> {data}</Text>
      )
    });

    return (
      <View>
        <Text style={styles.title}>SKILLS</Text>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.subTitle}>FRONT END</Text>
            </View>
            <View style={styles.bodyContainer}>
              {frontend}
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.subTitle}>BACK END</Text>
            </View>
            <View style={styles.bodyContainer}>
              {backend}
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.subTitle}>DATABASE</Text>
            </View>
            <View style={styles.bodyContainer}>
              {database}
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.subTitle}>OTHER</Text>
            </View>
            <View style={styles.bodyContainer}>
              {other}
            </View>
          </View>

        </View>
        
      </View>
    );
  }
}

export default Skills;
