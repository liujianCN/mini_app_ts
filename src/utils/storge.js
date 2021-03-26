import Taro from "@tarojs/taro";

export const localStorage = {
  getItem: (key, defaultValue) => {
    let value = Taro.getStorageSync(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    } else {
      return defaultValue;
    }
  },

  setItem: (key, data) => {
    if (typeof value === "string") {
      Taro.setStorage({
        key,
        data,
      });
    } else {
      Taro.setStorage({
        key,
        data: JSON.stringify(data),
      });
    }
  },
};
