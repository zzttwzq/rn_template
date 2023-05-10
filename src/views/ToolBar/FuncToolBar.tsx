import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const space = 20;

import {
  collaps,
  emoji,
  preview,
  saveimg,
  search,
  table,
  gante,
  charts,
  assetsLib,
} from "../../constraint/CustomAssets";
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

class FuncToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      funcList: [
        {
          title: "preview",
          img: preview,
        },
        {
          title: "emoji",
          img: emoji,
        },
        {
          title: "gante",
          img: gante,
        },
        {
          title: "table",
          img: table,
        },
        {
          title: "charts",
          img: charts,
        },
        {
          title: "search",
          img: search,
        },
        {
          title: "saveimg",
          img: saveimg,
        },
        {
          title: "assetsLib",
          img: assetsLib,
        },
      ],
      imageList: [],
      collaps: false,
    };
  }

  changeCollaps() {
    //   this.setState(())
  }

  render() {
    return (
      <View
        style={[
          ToolBarBackStyle,
          ShadowStyle,
          {
            bottom: getHeight(20),
            right: getWidth(20),
            height: getHeight(64),
            flexDirection: "row",
          },
        ]}
      >
        {this.state.funcList.map((it) => {
          return (
            <View key={it.title + "f0"}>
              <ToolBarImage index={it.title + "f1"} source={it.img} />
              <SizeBox index={it.title + "f2"} width={30} />
            </View>
          );
        })}
        {!this.state.collaps ? <Divider type={DividerType.Vertical} /> : null}
        <SizeBox width={10} />
        <TouchableOpacity>
          <ToolBarImage source={collaps} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export { FuncToolBar };
