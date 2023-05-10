import React from "react";
import { View } from "react-native";

import { SizeBox } from "../../../components/SizeBox";

import { ToolBarImage } from "./ToolBarImage";

export const ToolBarImageItem: React.FC = (props) => {
  return (
    <View key={props.index + "p0"}>
      <ToolBarImage index={props.index + "p1"} source={props.img} />
      <SizeBox index={props.index + "p2"} height={10} />
    </View>
  );
};
