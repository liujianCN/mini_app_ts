const defaultState = {
  total: 30,
  position: {},
};
export default {
  namespace: "common",

  state: defaultState,

  effects: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
