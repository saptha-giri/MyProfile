import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../Appstyles/skills"

class Skills extends React.Component {

  render() {
    const { details } = this.props;
    let skillsObj = JSON.parse(details);

    const frontend = skillsObj.frontend.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> - {data}</Text>
      )
    });

    const backend = skillsObj.backend.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> - {data}</Text>
      )
    });

    const database = skillsObj.database.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> - {data}</Text>
      )
    });

    const other = skillsObj.other.map((data,key)=>{
      return(
        <Text key={key} style={styles.sentance}> - {data}</Text>
      )
    });

    return (
      <View style={{}}>
        <Text style={styles.title}>SKILLS</Text>
        <View style={styles.container}>
          <Text style={styles.subTitle}>FRONT END</Text>
          <View style={{marginLeft:20}}>
            {frontend}
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>BACK END</Text>
          <View style={{marginLeft:20}}>
            {backend}
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>DATABASE</Text>
          <View style={{marginLeft:20}}>
            {database}
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>OTHER</Text>
          <View style={{marginLeft:20}}>
            {other}
          </View>
        </View>
      </View>
    );
  }
}

export default Skills;
