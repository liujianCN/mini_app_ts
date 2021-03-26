import Taro from "@tarojs/taro";
import qs from "query-string";

import { pages } from "../app.config";

class History {
  _getQueryString(params) {
    if (params && Object.keys(params).length) {
      return `?${qs.stringify(params)}`;
    } else {
      return "";
    }
  }
  _getFullUrl(name, params) {
    const page = `pages/${name}/index`;
    const url = `/${page}${this._getQueryString(params)}`;
    console.log(url);
    if (!pages.includes(page)) {
      console.log("pages里没有此页面");
      return;
    }
    return url;
  }
  /**
   * @description 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @param {*} name 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。
   */
  switchTab(name, option = {}) {
    const url = this._getFullUrl(name);
    Taro.switchTab({
      url,
      ...option,
    });
  }

  /**
   * @description 关闭所有页面，打开到应用内的某个页面
   * @param {*} name 需要跳转的应用内页面路径，路径后可以带参数
   */
  reLaunch(name, params, option = {}) {
    const url = this._getFullUrl(name, params);
    Taro.reLaunch({ url, ...option });
  }

  /**
   * @description 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用
   */
  redirectTo(name, params, option = {}) {
    const url = this._getFullUrl(name, params);
    Taro.reLaunch({ url, ...option });
  }

  /**
   * @description 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Taro.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
   */
  navigateTo(name, params, option = {}) {
    const url = this._getFullUrl(name, params);
    if (!url) {
      Taro.navigateTo({ url: this._getFullUrl("building", params), ...option });
      return;
    }
    Taro.navigateTo({ url, ...option });
  }

  /**
   * @description 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
   * @param {*} delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
   */
  navigateBack(delta, option = {}) {
    Taro.navigateBack({ delta, ...option });
  }
}
export default new History();
