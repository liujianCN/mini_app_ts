export default {
  pages: [
    "pages/home/index",
    "pages/search/index",
    "pages/index/index",
    "pages/profile/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
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
