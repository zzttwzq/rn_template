import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import {
  more,
  share,
  help,
  userPlaceholder,
} from "../../constraint/CustomAssets";
import { ShadowStyle, ToolBarBackStyle } from "../../constraint/CustomStyles";
import { getWidth, getHeight } from "../../constraint/CustomLayout";
import { Divider, DividerType } from "../../components/Divider";
import { SizeBox } from "../../components/SizeBox";

import { ToolBarImage } from "./components/ToolBarImage";

import { PopupView } from "../../components/PopupView";
import { SidePopup } from "./Popup/SidePopup/index";

class UserToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: null,
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
            right: getWidth(20),
            height: getHeight(64),
          },
        ]}
      > 
        <ToolBarImage source={help} />
        <SizeBox width={10} />
        <ToolBarImage source={share} />
        <SizeBox width={10} />
        <Divider type={DividerType.Vertical} />
        <SizeBox width={10} />
        <ToolBarImage
          source={this.state.userInfo ? this.state.userImg : userPlaceholder}
        />
        <SizeBox width={10} />
        <ToolBarImage source={more} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export { UserToolBar };
