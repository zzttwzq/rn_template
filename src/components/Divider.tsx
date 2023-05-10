import React from "react";
import { View } from "react-native";

import {
  LineVerticalStyle,
  LineHorizontalStyle,
} from "../constraint/CustomStyles";

enum DividerType {
  Vertical, // 0
  Horizontal, // 1
}

class Divider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          this.props.type === DividerType.Vertical
            ? LineVerticalStyle
            : LineHorizontalStyle,
          {},
        ]}
      />
    );
  }
}

export { Divider, DividerType };
