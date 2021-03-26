import React, { Component } from "react";
import Taro from "@tarojs/taro";

import { connect } from "react-redux";
import { View, Button } from "@tarojs/components";
import { AtAvatar, AtList, AtListItem } from "taro-ui";

import history from "@/utils/history";

// import background from "@/image/profile/background.svg";
import style from "./index.scss";

@connect(({ common }) => ({
  common,
}))
class Profile extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handelSelectCarType = () => {
    history.navigateTo("carSelect");
  };
  handelToDetail = (path) => {
    history.navigateTo(path);
  };

  handleN = () => {
    Taro.navigateToMiniProgram({
      appId: "wx7564fd5313d24844",
      path: "pages/video/video?page=0&avid=55368614",
      // envVersion: "develop",
      success(res) {
        console.log(res);
      },
      fail(res) {
        console.log(res);
      },
    });
  };

  render() {
    return (
      <View className={style.profile}>
        <View className={style.background}>
          <View className={style.avatar} onClick={this.handleN}>
            <AtAvatar circle image="" size="large" />
            {/* <OpenData type="userAvatarUrl" /> */}
          </View>
        </View>

        <AtList hasBorder={false}>
          <AtListItem
            title="选择题库"
            extraText="小车(C1/C2/C3)"
            arrow="right"
            iconInfo={{ size: 20, color: "#b7dfff", value: "money" }}
            onClick={this.handelSelectCarType}
          />
        </AtList>
        <View className={style.statistics}>
          {[
            {
              title: "累计答题数",
              subTitle: "正确率0%",
              count: 0,
            },
            {
              title: "考试平均分",
              subTitle: "累计考试0次",
              count: 0,
            },
            {
              title: "剩余错题数",
              subTitle: "总错题0道",
              count: 0,
            },
          ].map(({ title, subTitle, count }) => (
            <View key={title} className={style.item}>
              <View className={style.count}>{count}</View>
              <View className={style.title}>{title}</View>
              <View className={style.subTitle}>{subTitle}</View>
            </View>
          ))}
        </View>
        {/* <View style={{ height: "14px", background: "#efefef" }} /> */}
        <AtList hasBorder={false}>
          <Button openType="feedback" className={style.button}>
            <AtListItem
              title="意见反馈"
              arrow="right"
              hasBorder={false}
              iconInfo={{ size: 20, color: "#b7dfff", value: "message" }}
            />
          </Button>
          {[
            {
              title: "我的收藏",
              icon: "heart",
              path: "favorites",
            },
            {
              title: "关于我们",
              icon: "alert-circle",
              path: "linkMe",
            },
          ].map(({ title, icon, path }) => (
            <AtListItem
              key={path}
              title={title}
              arrow="right"
              hasBorder={false}
              iconInfo={{ size: 20, color: "#b7dfff", value: icon }}
              onClick={() => {
                this.handelToDetail(path);
              }}
            />
          ))}
        </AtList>
      </View>
    );
  }
}

export default Profile;
