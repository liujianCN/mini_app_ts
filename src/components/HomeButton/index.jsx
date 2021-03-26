import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";

// import Taro from "@tarojs/taro";
// import { commonSetStatusBarHeightAction } from "@/models/common";

import style from "./index.scss";

class CustomHeader extends Component {
  componentDidMount() {}

  render() {
    const { statusBarHeight, customHeaderHeight } = this.props;
    return (
      <View
        className={style.customHeader}
        style={{ height: customHeaderHeight, paddingTop: statusBarHeight }}
      >
        <Text className={style.customHeaderText}>收到回复</Text>
        <AtIcon
          className={style.customHeaderIcon}
          value="chevron-left"
          color="transparent"
        />
      </View>
    );
  }
}

export default CustomHeader;
