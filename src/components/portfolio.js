import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "../Appstyles/portfolio"

class Portfolio extends React.Component {

  render() {
    return (
      <View>
        <Text style={styles.title}>PORTFOLIO</Text>

        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.subTitle}>MOBILE GAME</Text>
            </View>
            <View style={styles.bodyContainer}>
              <Image
              style={styles.imageStyle}
              source={require('../Assets/portfolio/game.png')}
            />
            </View>
          </View>
          

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.subTitle}>Chat App - using react.js and node.js</Text>
            </View>
            <View style={styles.bodyContainer}>
              <Image
              style={{width:580,height:380}}
              source={require('../Assets/portfolio/chat-app.png')}
            />
            </View>
          </View>

        </View>

        <View style={styles.mainContainer}>
          <View style={styles.container}>
              <View style={styles.headerContainer}>
                <Text style={styles.subTitle}>Expense App</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Image
                style={styles.imageStyle}
                source={require('../Assets/portfolio/expense.png')}
              />
              </View>
            </View>
          </View>
      </View>
    );
  }
}

export default Portfolio;
