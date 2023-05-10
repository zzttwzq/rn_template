import React from "react";
import { View, StyleSheet } from "react-native";

class SidePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
  },
});

export { SidePopup };
