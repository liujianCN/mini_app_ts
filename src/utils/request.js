import Taro from "@tarojs/taro";

export default ({ url, method = "GET", ...config }) => {
  return new Promise((resolve, reject) => {
    console.log(`https://liujiancn.cn${url}`, method, config);
    Taro.request({
      url: `https://liujiancn.cn${url}`,
      method,
      ...config,
      success: (res) => {
        if (res.data?.message && !res.data?.success) {
          Taro.showToast({
            title: res.data.message,
          });
        }
        resolve(res.data);
      },
      fail: (err) => {
        console.log(err);
        reject(err);
      },
    });
  });
};
