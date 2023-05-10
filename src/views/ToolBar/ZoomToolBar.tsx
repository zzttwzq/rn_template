import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import { reward, next, setting } from "../../constraint/CustomAssets";
import { ShadowStyle, ToolBarBackStyle } from "../../constraint/CustomStyles";
import { getWidth, getHeight } from "../../constraint/CustomLayout";
import { Divider, DividerType } from "../../components/Divider";
import { PopupView } from "../../components/PopupView";
import { SizeBox } from "../../components/SizeBox";

import { ToolBarImage } from "./components/ToolBarImage";
import { ToolBarImageItem } from "./components/ToolBarImageItem";
import { SidePopup } from "./Popup/SidePopup/index";

class ZoomToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 0.9,
    };
  }

  zoomIn() {
    let current = this.state.zoom + 0.1;
    if (current > 2) {
      current = 2;
    }

    this.setState((state, props) => ({
      renderObjects: current,
    }));
  }

  zoomOut() {
    let current = this.state.zoom - 0.1;
    if (current < 0) {
      current = 0.1;
    }

    this.setState((state, props) => ({
      renderObjects: current,
    }));
  }

  render() {
    return (
      <View style={[
        ToolBarBackStyle,
        ShadowStyle,
        {
          bottom: getHeight(20),
          left: getWidth(20),
          height: getHeight(64),
        },
      ]}>
        <ToolBarImage source={setting} />
        <SizeBox width={10} />
        <Divider type={DividerType.Vertical} />
        <SizeBox width={10} />
        <Text style={styles.title}>{this.state.zoom * 100 + "%"}</Text>
        <SizeBox width={10} />
        <Divider type={DividerType.Vertical} />
        <SizeBox width={10} />
        <TouchableOpacity onPress={this.zoomIn.bind(this)}>
          <ToolBarImage source={reward} />
        </TouchableOpacity>
        <SizeBox width={10} />
        <TouchableOpacity onPress={this.zoomOut.bind(this)}>
          <ToolBarImage source={next} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export { ZoomToolBar };
