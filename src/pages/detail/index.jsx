import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtProgress } from "taro-ui";

import sequentialPractice from "@/image/home/sequentialPractice.svg";
import mockExam from "@/image/home/mockExam.svg";
import specialTraining from "@/image/home/specialTraining.svg";
import wrongQuestion from "@/image/home/wrongQuestion.svg";
// import building from "@/image/home/building.svg";

import { asyncActionGetExamLibList } from "@/models/examLib";

import style from "./index.scss";

@connect(
  ({ common, examLib }) => ({
    common,
    examLib,
  }),
  {
    asyncActionGetExamLibList,
  }
)
class Home extends Component {
  state = {
    tab: 0,
  };

  componentDidMount() {
    this.props.asyncActionGetExamLibList();
  }

  handleTabChange = (value) => {
    this.setState({
      tab: value,
    });
  };

  render() {
    const { tab } = this.state;
    const {
      examLib: { carType },
      examLib,
    } = this.props;
    console.log(examLib, tab);
    const total = examLib[`${carType}Exam${tab + 1}Data`].total;
    const current = examLib[`${carType}Exam${tab + 1}Current`];
    return (
      <View className={style.home}>
        <AtTabs
          swipeable
          current={tab}
          tabList={[
            { title: "科一" },
            // { title: "科二" },
            // { title: "科三" },
            // { title: "科四" },
          ]}
          onClick={this.handleTabChange}
        >
          <AtTabsPane current={tab} index={0}>
            <View>
              <View
                className={style.sectionBig}
                style={{ background: "rgba(204,255,255, 0.3)" }}
              >
                <View className={style.left}>
                  <Image className={style.img} src={sequentialPractice} />
                </View>
                <View className={style.right}>
                  <View>顺序练习</View>
                  <View>
                    {current}/{total}
                  </View>
                </View>
                <AtProgress
                  className={style.progress}
                  percent={current / total}
                  strokeWidth={1}
                  status="progress"
                  isHidePercent
                />
              </View>
              <View
                className={style.sectionBig}
                style={{ background: "rgba(204,255,255, 0.3)" }}
              >
                <View className={style.right}>
                  <View>模拟考试</View>
                </View>

                <View className={style.left}>
                  <Image className={style.img} src={mockExam} />
                </View>
              </View>
              <View
                className={style.sectionBig}
                style={{ background: "rgba(204,255,255, 0.3)" }}
              >
                <View className={style.left}>
                  <Image className={style.img} src={specialTraining} />
                </View>
                <View className={style.right}>
                  <View>专项训练</View>
                </View>
              </View>
              <View
                className={style.sectionBig}
                style={{ background: "rgba(204,255,255, 0.3)" }}
              >
                <View className={style.right}>
                  <View>错题巩固</View>
                </View>

                <View className={style.left}>
                  <Image className={style.img} src={wrongQuestion} />
                </View>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Home;
