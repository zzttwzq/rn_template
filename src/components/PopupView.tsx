import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// import { BoxShadow } from "react-native-shadow";

interface PopupView {
  visible: string;
  // container: JSX;
}
class PopupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      container: props.container,
      position: props.position,
    };
  }
  shadowOpt = {
    width: 668, // 与子元素高一致
    height: 300, // 与子元素宽一致
    color: "#000", // 阴影颜色
    border: 7, // 阴影宽度
    radius: 10, // 与子元素圆角一致
    opacity: 0.45, // 透明
    x: 0, // 偏移量
    y: 0,
    style: { marginVertical: 5 },
  };

  render() {
    return this.state.visible ? (
      // <BoxShadow setting={shadowOpt}>
      <View
        style={[
          styles.container,
          {
            top: this.state.position.x,
            left: this.state.position.y,
          },
        ]}
      >
        {/* <Image
          source={""}
          style={[
            {
              position: "absolute",
              marginTop: -10,
              marginLeft: 60,
              width: 10,
              height: 12,
              backgroundColor: "red",
            },
          ]}
        /> */}
        <View>{this.state.container}</View>
      </View>
    ) : // </BoxShadow>
    null;
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#666",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.1,
    // shadowRadius: 3.84,
    elevation: 10,
  },
});

export { PopupView };
