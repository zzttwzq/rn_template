import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import {
  select,
  erase,
  exports,
  note,
  pan,
  template,
  more,
} from "../../constraint/CustomAssets";
import { ShadowStyle, ToolBarBackStyle } from "../../constraint/CustomStyles";
import { getWidth, getHeight } from "../../constraint/CustomLayout";
import { Divider, DividerType } from "../../components/Divider";
import { PopupView } from "../../components/PopupView";
import { SizeBox } from "../../components/SizeBox";

import { ToolBarImage } from "./components/ToolBarImage";
import { ToolBarImageItem } from "./components/ToolBarImageItem";
import { SidePopup } from "./Popup/SidePopup/index";

class PanToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      funcList: [
        {
          title: "select",
          img: select,
        },
        {
          title: "erase",
          img: erase,
        },
        {
          title: "exports",
          img: exports,
        },
        {
          title: "note",
          img: note,
        },
        {
          title: "pan",
          img: pan,
        },
        {
          title: "template",
          img: template,
        },
      ],
      imageList: [],
    };
  }

  render() {
    return (
      <View
        style={[
          ToolBarBackStyle,
          ShadowStyle,
          {
            top: getHeight(130),
            right: getWidth(20),
            width: getWidth(64),
            flexDirection: "column",
          },
        ]}
      >
        {this.state.funcList.map((it) => {
          return (
            // <View key={it.title}>
            //   <ToolBarImageItem
            //     // index={it.title}
            //     img={it.img}
            //   ></ToolBarImageItem>
            // </View>
            <View key={it.title + "p0"}>
              <ToolBarImage index={it.title + "p1"} source={it.img} />
              <SizeBox index={it.title + "p2"} height={10} />
            </View>
          );
        })}
        <SizeBox height={10} />
        <Divider type={DividerType.Horizontal} />
        <SizeBox height={10} />
        <ToolBarImage rotate={90} source={more} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export { PanToolBar };
