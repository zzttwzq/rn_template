import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.initUser();
  }

  async initUser() {
    // await userService.logout();
    // await userService.login("2185675739@qq.com", "ywh1996");
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text>homePage</Text>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});

export default HomeScreen;
