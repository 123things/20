const path = require('path')
const resolve = (dir) => path.join(__dirname,dir)
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 公共路径
    chainWebpack : (config) =>{
        config.resolve.alias
            .set('@',resolve('src'))
            .set('@styles',resolve('src/assets/styles'))
            .set('@pages',resolve('src/pages'))
            .set('@common',resolve('src/common'))
            .set('@images',resolve('src/assets/images'))
            .set('@js',resolve('src/assets/js'))
    }
}