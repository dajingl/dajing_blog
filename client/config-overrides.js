const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
// 打包丑化代码
/**
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const myPlugin = [
  new UglifyJsPlugin(
    {
      uglifyOptions: {
        warnings: false,
        compress: {
          drop_debugger: true,
          drop_console: true
        }
      }
    }
  )
]
*/
module.exports = override(
    // antd按需加载，不需要每个页面都引入“antd/dist/antd.css”了
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true  //这里一定要写true，css和less都不行
    }),
    // 配置路径别名
    addWebpackAlias({
        "@": resolve("src")
    }),
    addLessLoader({
        javascriptEnabled: true,
        //下面这行很特殊，这里是更改主题的关键，这里我只更改了主色，当然还可以更改其他的，下面会详细写出。
        modifyVars: {
            "@primary-color": "#1890ff",                         // 全局主色
        }
    }),
    (config) => { //暴露webpack的配置 config ,evn
        // 去掉打包生产map 文件
        // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
        if (process.env.NODE_ENV === "production") config.devtool = false;
        if (process.env.NODE_ENV !== "development") config.plugins = [...config.plugins]
        //1.修改、添加loader 配置 :
        // 所有的loaders规则是在config.module.rules(数组)的第二项
        // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
        // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        console.log(loaders,'loaders')
        loaders[6].use.push({
            loader: 'style-resources-loader',
            options: {
                resources: path.resolve(__dirname, 'src/asset/less/common.less')//全局引入公共的scss 文件
            }
        })
        return config
    }
)