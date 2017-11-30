
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer') // 自動添加像是webkit-之類的前綴
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "/css/[name].css",
    // disable: process.env.NODE_ENV === "development" // 為了 Hot Reload
    disable: true // 為了 Hot Reload
});

var config = {
	/* 頁面入口文件 */
	// 如果想添加多個不互相依賴的文件，可以使用數組格式
	// entry: ['./public/src/index.js', './public/src/googleAnalytics.js']
	entry: [
		path.join(__dirname, 'src', 'main')
	],
	/* 輸出配置 

	「path」僅僅告訴Webpack結果存儲在哪裡，然而「publicPath」項則被許多Webpack的
	插件用於在生產模式下更新內嵌到css、html文件裡的url值。

	*/

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},


	/* 多輸入輸出配置
		entry: {
			"indexEntry": './public/src/index.js',
			"profileEntry": './public/src/profile.js'
		}

		output: {
			path: '/dist',
			filename: "[name].js"
		}

		配置將會生成兩個js文件：indexEntry.js和profileEntry.js分別會在index.html和profile.html中被引用
		<script src="dist/profileEntry.js"></script>

		或者也可以寫成
		entry: {
			"special": ['jquery', 'analytics.js']
		}
	*/

	module: {


		rules: [
			{
				test: /\.js$/, // 匹配.js文件，如果通過則使用下面的loader
				loader: 'babel-loader', // 使用babel（babel-loader的簡寫）作為loader
				exclude: /node_modules/ // 排除node_modules文件夾
			},
			{
				test: /\.vue$/,
				// use: ['vue-loader', 'eslint-loader']
				loader: 'vue-loader'
			},
			{
        		test: /\.css$/,
        		use: ['style-loader', 'css-loader']
      		},
			{
	            test: /\.s[ac]ss$/,
	            // loader: ["style-loader", "css-loader", "sass-loader"]
	            use: extractSass.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                // 在開發環境使用 style-loader
	                fallback: "style-loader"	//編譯後用什麼loader來提取css文件
	            })
        	},
      		{ 
      			test: /\.(woff|woff2|eot|ttf|otf)$/i, 
      			loader: 'url-loader?limit=8192&name=[name].[ext]'
      		},	
      		{ 
      			test: /\.(jpe?g|png|gif|svg)$/i, 
      			loader: 'url-loader?limit=8192&name=[name].[ext]'
      		},
      		{
			    // Expose Jquery 為全局變量
			    test: require.resolve('jquery'),
			    loader: 'expose-loader?jQuery!expose-loader?$'
			}
        ],
	},

	/* resolve 其他解決方案配置*/

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
	    	// 設定縮路徑
	      	vue: 'vue/dist/vue.js',
	      	components: path.resolve(__dirname, './src/components'),
    		styles: path.resolve(__dirname, './src/sass'),
    		assets: path.resolve(__dirname, './src/assets'),
	    }
	},

	/* Webpack-dev-serve 相關設定*/
	// 但有時候會失效，因此建立透過CLI進行設定
	devServer: {
  		inline: true,
  		hot:true
	},

	// 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map',


	/* Plugins */
	plugins: [
		extractSass,
    	new webpack.HotModuleReplacementPlugin(),
	    new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          'root.jQuery': 'jquery',
          tilt: 'tilt.js',
      	}),
  	],

 //  	externals: {
	//   	tilt: 'tilt'
	// }


  	/* Externals */
  	// 防止将某些 import 的包(package)打包到 bundle 中，而是在运
  	// 行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。

}

module.exports = config