import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../Appstyles/awards"

class AWARDS extends React.Component {

  render() {
    const { details } = this.props;
    let awards = JSON.parse(details);
    const awardsView = awards.list.map((award,key)=>{
      return(
        <Text key={key} style={styles.sentance}>{award}</Text>
      )
    });

    return (
      <View>
        <Text style={styles.title}>AWARDS and Certificates</Text>
        {awardsView}
      </View>
    );
  }
}

export default AWARDS;
