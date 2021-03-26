import React, { useEffect, useState } from "react";
import history from "@/utils/history";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";

import building from "@/image/home/building.svg";

import style from "./index.scss";

let timer;
const Building = () => {
  const [time, setTime] = useState(3);
  useEffect(() => {
    timer = setInterval(() => {
      if (time === 1) {
        handleBack();
        return;
      }
      setTime((v) => v - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, [time]);

  const handleBack = () => {
    history.navigateBack();
  };

  return (
    <View className="building">
      <Image className={style.buildingImg} src={building} />
      <View className={style.buildingText}>功能开发中...</View>
      <AtButton
        className={style.btn}
        circle
        type="primary"
        onClick={handleBack}
      >
        返回({time}s)
      </AtButton>
    </View>
  );
};

export default Building;
