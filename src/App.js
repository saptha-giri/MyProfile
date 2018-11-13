import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import mainStyle from "./Appstyles/mainStyle";

import About from "./components/about";
import Experience from "./components/experience";
import Porfolio from "./components/portfolio";
import Skills from "./components/skills";
import Awards from "./components/awards";
import myData from "./Appdata/myData.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: { color: "#fff" },
      experience: {},
      portfolio: {},
      skills: {},
      awards: {},
      selected: "about"
    };
  }

  textClick(data) {
    this.setState({
      about: {},
      experience: {},
      portfolio: {},
      skills: {},
      awards: {},
      [data]: { color: "#fff" },
      selected: data
    });
  }

  renderContent() {
    let { selected } = this.state;
    if (selected === "about") {
      let data = JSON.stringify(myData.about);
      return <About details={data} />;
    } else if(selected === "experience"){
      let data = JSON.stringify(myData.experience);
      return <Experience details={data} />;
    }else if(selected === "portfolio"){
      // let data = JSON.stringify(myData.portfolio);
      return <Porfolio/>
    }else if(selected === "skills"){
      let data = JSON.stringify(myData.skills);
      return <Skills details={data}/>
    }else if(selected === "awards"){
      let data = JSON.stringify(myData.awards);
      return <Awards details={data}/>
    }else{
      return <View/>
    }
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <View style={mainStyle.leftPanel}>
          <Image
            source={require("./Assets/profile1.jpg")}
            style={mainStyle.circle}
          />

          <Text
            style={[mainStyle.linkText, this.state.about]}
            onPress={() => this.textClick("about")}
          >
            ABOUT
          </Text>
          <Text
            style={[mainStyle.linkText, this.state.experience]}
            onPress={() => this.textClick("experience")}
          >
            EXPERIENCE
          </Text>
          <Text
            style={[mainStyle.linkText, this.state.portfolio]}
            onPress={() => this.textClick("portfolio")}
          >
            PORTFOLIO
          </Text>
          <Text
            style={[mainStyle.linkText, this.state.skills]}
            onPress={() => this.textClick("skills")}
          >
            SKILLS
          </Text>
          {/*<Text
            style={[mainStyle.linkText, this.state.interests]}
            onPress={() => this.textClick("interests")}
          >
            INTERESTS
          </Text>*/}
          <Text
            style={[mainStyle.linkText, this.state.awards]}
            onPress={() => this.textClick("awards")}
          >
            AWARDS
          </Text>
        </View>
        <View style={mainStyle.rightPanel}>
          <ScrollView>
          <View style={mainStyle.panelContainer}>
          {this.renderContent()}
          </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
