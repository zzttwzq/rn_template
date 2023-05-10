import React from "react";
import { View } from "react-native";

class SizeBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        key={this.props.index}
        style={{
          width: this.props.width ? this.props.width : 0,
          height: this.props.height ? this.props.height : 0,
          //   borderColor: "red",
          //   borderWidth: 1,
        }}
      />
    );
  }
}

export { SizeBox };
