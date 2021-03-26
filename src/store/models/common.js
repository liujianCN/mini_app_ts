import Taro from "@tarojs/taro";

const defaultState = {
  total: 30,
  position: {},

  statusBarHeight: 0,
  customHeaderHeight: 0,
  carType: Taro.getStorageSync("carType"),
};
export default {
  namespace: "common",

  state: defaultState,

  effects: {},

  reducers: {
    setStatusBarHeight(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    setCarType(state, { carType }) {
      return {
        ...state,
        carType,
      };
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

export const commonSetStatusBarHeightAction = (payload) => {
  return {
    type: "common/setStatusBarHeight",
    payload,
  };
};
export const commonSetCarTypeAction = (carType) => {
  return {
    type: "common/setCarType",
    carType,
  };
};
