var path = require('path')
var config = {
	// 頁面入口文件
	entry: path.join(__dirname, 'src', 'main'),
	// 輸出配置
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				// 多個loader用!連接起來
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
			//图片文件使用 url-loader 来处理，小于8kb的直接转为base64
    //         { 
				// test: /\.(png|jpg)$/, 
    //         	loader: 'url-loader?limit=8192'
    //         }
		]
	},
	// 其他解決方案配置

    //查找module的话从这里开始查找
    //root: 'E:/github/flux-example/src', //绝对路径
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    //extensions: ['', '.js', '.json', '.scss'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    // alias: {
    //     AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
    //     ActionType : 'js/actions/ActionType.js',
    //     AppAction : 'js/actions/AppAction.js'
    // }

	resolve: {
	    extensions: ['*', '.js', '.vue'],
	    /**
	     * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
	     */
	    alias: {
	      vue: 'vue/dist/vue.js'
	    }
	}
}

module.exports = config