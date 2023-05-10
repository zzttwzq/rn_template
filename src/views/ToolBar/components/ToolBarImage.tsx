import React from "react";
import { Image } from "react-native";

import { ToolBarImageStyle } from "../../../constraint/CustomStyles";

class ToolBarImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: this.props.rotate ? this.props.rotate : 0 + "deg",
    };
  }

  render() {
    return (
      <Image
        key={this.props.index ? this.props.index : null}
        source={this.props.source}
        resizeMode={"center"}
        style={[
          ToolBarImageStyle,
          {
            // backgroundColor: "red",
            // transform: [{ rotate: this.state.rotate }],
          },
        ]}
      />
    );
  }
}

export { ToolBarImage };
