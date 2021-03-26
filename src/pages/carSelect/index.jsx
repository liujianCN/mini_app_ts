import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";

import car from "@/image/icon/car.svg";
import truck from "@/image/icon/truck.svg";
import bus from "@/image/icon/bus.svg";
import motorcycle from "@/image/icon/motorcycle.svg";

import { commonSetCarTypeAction } from "@/models/common";

import style from "./index.scss";

const carTypeList = [
  {
    name: "小车",
    code: "car",
    type: "C1/C2/C3",
    pic: car,
  },
  {
    name: "货车",
    code: "truck",
    type: "A2/B2",
    pic: truck,
  },
  {
    name: "客车",
    code: "bus",
    type: "A1/A3/B1",
    pic: bus,
  },
  {
    name: "摩托车",
    code: "motorcycle",
    type: "D/E/F",
    pic: motorcycle,
  },
];

@connect(
  ({ common }) => ({
    common,
  }),
  {
    commonSetCarTypeAction,
  }
)
class Select extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPullDownRefresh() {}

  handleSearchBarFocus = () => {
    Taro.switchTab({
      url: "/pages/search/index",
    });
  };

  handleSelectCar = (code) => {
    Taro.setStorage({
      key: "carType",
      data: code,
    });
    this.props.commonSetCarTypeAction(code);
  };

  handleSubmit = () => {
    const { carType } = this.props.common;
    if (!carType) {
      Taro.showToast({
        title: "请选择一个类型！",
        icon: "none",
      });
      return;
    }
    Taro.switchTab({
      url: "/pages/home/index",
    });
  };

  render() {
    const { carType } = this.props.common;
    return (
      <View className={style.select}>
        <View className={style.carList}>
          {carTypeList.map(({ name, type, pic, code }) => (
            <View
              key={name}
              className={`${style.carItem} ${
                carType === code ? style.selectCar : ""
              }`}
              onClick={() => this.handleSelectCar(code)}
            >
              <View className={style.picItem}>
                <Image className={style.pic} src={pic} alt="小车" />
              </View>
              <View className={style.text}>{name}</View>
              <View className={style.text}>{type}</View>
            </View>
          ))}
        </View>
        <View className={style.button}>
          <AtButton circle type="primary" onClick={this.handleSubmit}>
            确定
          </AtButton>
        </View>
      </View>
    );
  }
}

export default Select;
