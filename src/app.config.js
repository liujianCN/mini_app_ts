export const pages = [
  "pages/home/index",
  "pages/search/index",
  "pages/profile/index",
  "pages/carSelect/index",
  "pages/building/index",
  "pages/detail/index",
];
export default {
  pages,
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    backgroundColor: "#dfdfdf",
  },
  tabBar: {
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "image/tabBar/home.png",
        selectedIconPath: "image/tabBar/homeSelected.png",
      },
      {
        pagePath: "pages/search/index",
        text: "发现",
        iconPath: "image/tabBar/search.png",
        selectedIconPath: "image/tabBar/searchSelected.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "image/tabBar/profile.png",
        selectedIconPath: "image/tabBar/profileSelected.png",
      },
    ],
  },
};
