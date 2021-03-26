// import Taro from "@tarojs/taro";
import { localStorage } from "@/utils/storge";

import { getExamLibList } from "@/services/examLib";

const carTypeMap = {
  car: "C1",
};

const defaultState = {
  carType: localStorage.getItem("carType"),
  carExam1Data: {}, // 小车科目一题库
  carExam1Current: localStorage.getItem("carExam1Current", 0), // 小车科目一题库当前位置
};
export default {
  namespace: "examLib",

  state: defaultState,

  effects: {
    *getExamLib(
      { payload: { type = "car", subject = 1, size = 20 } = {} },
      { call, put }
    ) {
      const key = `${type}Exam${subject}Data`;
      const localData = localStorage.getItem(key, {});
      const { version } = localData;
      let data;
      console.log(version);
      // const { data } = yield call(getExamLibList, {
      //   version,
      //   size,
      //   type: carTypeMap[type],
      //   subject,
      // });

      console.log(data);
      if (data) {
        yield put({
          type: "save",
          payload: {
            [key]: data,
          },
        });
        localStorage.setItem(key, data);
      } else {
        yield put({
          type: "save",
          payload: {
            [key]: localData,
          },
        });
      }
    },
  },

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
    setCurrent(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

export const asyncActionGetExamLibList = (payload) => {
  return {
    type: "examLib/getExamLib",
    payload,
  };
};
export const actionSetCurrent = (payload) => {
  return {
    type: "examLib/setCurrent",
    payload,
  };
};
