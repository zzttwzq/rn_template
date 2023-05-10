import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { unFavorite, favorite, exports } from "../../constraint/CustomAssets";
import {
  ToolBarBackStyle,
  ShadowStyle,
  NormalTextStyle,
  TitleTextStyle,
} from "../../constraint/CustomStyles";
import { getWidth, getHeight } from "../../constraint/CustomLayout";
import { Divider, DividerType } from "../../components/Divider";
import { PopupView } from "../../components/PopupView";
import { SizeBox } from "../../components/SizeBox";

import { ToolBarImage } from "./components/ToolBarImage";
import { SidePopup } from "./Popup/SidePopup/index";

class ProjectToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isFavorate: false,
      projectInfo: {
        title: "NearHub",
        name: "safsdf",
      },
      userInfo: null,
      sideBar: true,
    };
  }

  draw() {}

  render() {
    return (
      <View
        style={[
          ToolBarBackStyle,
          ShadowStyle,
          {
            top: getHeight(20),
            left: getWidth(20),
            height: getHeight(64),
          },
        ]}
      >
        <Text style={TitleTextStyle}>{this.state.projectInfo.title}</Text>
        <SizeBox width={10} />
        <Divider type={DividerType.Vertical} />
        <SizeBox width={10} />
        <Text style={NormalTextStyle}>{this.state.projectInfo.name}</Text>
        <SizeBox width={10} />
        <Divider type={DividerType.Vertical} />
        <SizeBox width={10} />
        <ToolBarImage source={this.state.isFavorate ? unFavorite : favorite} />
        <SizeBox width={10} />
        <ToolBarImage source={exports} />
        <PopupView
          visible={this.state.sideBar}
          position={{ x: getHeight(64 + 10), y: 0 }}
          // container={<SidePopup />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export { ProjectToolBar };
