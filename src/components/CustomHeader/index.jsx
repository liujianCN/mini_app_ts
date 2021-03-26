import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";

// import Taro from "@tarojs/taro";
// import { commonSetStatusBarHeightAction } from "@/models/common";

import style from "./index.scss";

@connect(({ common }) => ({
  statusBarHeight: common.statusBarHeight,
  customHeaderHeight: common.customHeaderHeight,
}))
class CustomHeader extends Component {
  componentDidMount() {
    // const { statusBarHeight } = Taro.getSystemInfoSync();
    // const { top, bottom } = Taro.getMenuButtonBoundingClientRect();
    // console.log(top, bottom);
    // const menuButtonHeight = bottom - top;
    // console.log(statusBarHeight, menuButtonHeight);
    // store.dispatch(
    //   commonSetStatusBarHeightAction({
    //     statusBarHeight,
    //     customHeaderHeight: (top - statusBarHeight) * 2 + menuButtonHeight,
    //   })
    // );
  }

  render() {
    const { statusBarHeight, customHeaderHeight } = this.props;
    return (
      <View
        className={style.customHeader}
        style={{ height: customHeaderHeight, paddingTop: statusBarHeight }}
      >
        <AtIcon className={style.customHeaderIcon} value="chevron-left" />
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
