import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";

import "./index.scss";

@connect(({ common }) => ({
  common,
}))
class Index extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    );
  }
}

export default Index;
