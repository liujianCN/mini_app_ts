const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const resolve = (p) => path.resolve(__dirname, "..", p);

const config = {
  projectName: "coupon",
  date: "2020-9-25",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  alias: {
    // "@": resolve("src"),
    "@/project": resolve("project.config.json"),
    "@/package": resolve("package.json"),
    "@/image": resolve("src/image"),
    "@/components": resolve("src/components"),
    "@/pages": resolve("src/pages"),
    "@/services": resolve("src/services"),
    "@/store": resolve("src/store"),
    "@/models": resolve("src/store/models"),
    "@/selector": resolve("src/store/selector"),
    "@/utils": resolve("src/utils"),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024 * 5, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "global", // 转换模式，取值为 global/module
          generateScopedName: isDev ? "[path][name]_[local]" : "[hash:base64]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "global", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
