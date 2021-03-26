import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";

import style from "./index.scss";

class SearchBar extends Component {
  componentDidMount() {}

  render() {
    return (
      <View className={style.searchContent} onClick={this.handleSearchBarFocus}>
        <View className={style.searchBar}>
          <AtIcon value="search" className={style.text} />
          <Text className={style.text}>搜索</Text>
        </View>
      </View>
    );
  }
}

export default SearchBar;
