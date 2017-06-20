# vusion-iconmaker

## 安装

```javascript

npm install iconfont-create-plugin

```
## 前置条件

本插件是webpack的loader，用于配合iconfont-create-plugin按需加载svg生成字体图标库，所以使用前确保已经引入[vusion-iconmaker](https://www.npmjs.com/package/iconfont-create-plugin)。

本插件为[vusion](https://github.com/vusion/vusion)做支持，有兴趣可以关注一下

## 使用方式

```javascript

// webpack配置，较为简单配置svg的loader为vusion-iconmaker即可。
const FontIconCreatePlugin = require('fonticon-create-plugin');

module.exports = {
    module: {
        rules: [
            { test: /\.svg$/, loader: 'vusion-iconmaker', include: path.join(__dirname, 'src/icons') },
            { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
            { test: /\.(woff|eot|ttf|svg)$/, loader: 'url-loader', exclude: path.join(__dirname, 'src/icons') }
        ]
    },
    plugins: [
        new FontIconCreatePlugin({
            name:"icon",
            output:{
                font:"/src/iconfont",
                css:"/src/css/font",
                html:"/src/iconfont"
            },
            suffix:{
                css:".mcss"
            },
            publishPath:"/publish/font/"
        }),
    ],
}

```
## 引用方式

```javascript
const $app = document.getElementById('app');

$app.innerHTML = `
<i class="${require('./icons/sound-off.svg')}"></i>
<i class="${require('./icons/sound-on.svg')}"></i>
<i class="${require('./icons/arrow-left.svg')}"></i>
<i class="${require('./icons/test/arrow-left.svg')}"></i>
<i class="${require('./icons/arrow-right.svg')}"></i>
<i class="${require('./icons/arrow-up.svg')}"></i>
`
```
示例直接使用了require的方式引入，使用import亦可，最终loader会直接返回生成的class名


