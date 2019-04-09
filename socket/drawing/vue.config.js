let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const debug = process.env.NODE_ENV !== 'production'
module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://cli.vuejs.org/guide/webpack.html#simple-configuration
    chainWebpack: config => {     
    },
     // webpack配置，值位对象时会合并配置，为方法时会改写配置
    configureWebpack: config => {
        if (debug)
        {
            // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        }
        else
        {
            // 生产环境配置
        }
        Object.assign(config, { // 开发生产共同配置
            resolve:
            {
                extensions: [".js", ".vue", ".json", ".ts"],
                alias:
                {
                    "src": resolve("src"),
                    "routes": resolve("src/routes"),
                    "store": resolve("src/store"),
                    "views": resolve("src/views"),
                    "styles": resolve("src/styles"),
                    "utils": resolve("src/utils"),
                }
            }
        })
    },
    // vue-loader 配置项
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
     // 是否使用css分离插件 ExtractTextPlugin
     extract: true,
     // 开启 CSS source maps?
     sourceMap: false,
     // css预设器配置项
     loaderOptions: {},
     // 启用 CSS modules for all css / pre-processor files.
     modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8090,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    }
}