var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require("vue-loader");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');	


var isProduction = function () {
    return process.env.NODE_ENV === 'production';
}

var apiPort = process.env.API_PORT || 31956;

var plugins = [
        //将样式统一发布到style.css中
        new ExtractTextPlugin("style.css"),
        // 使用 ProvidePlugin 加载使用率高的依赖库
        new webpack.ProvidePlugin({
            $: 'webpack-zepto',
            Zepto: "webpack-zepto",
            "window.Zepto": "webpack-zepto"
        })
];

var cdnPrefix = "",
    buildPath = "/dist/",
    publishPath = cdnPrefix + buildPath,
    devtool = '#source-map';

//生产环境js压缩和图片cdn
if (isProduction()) {
	cdnPrefix = "";
    publishPath = cdnPrefix + buildPath;
    
    plugins.push(new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: true,
        inject: false,
        files: {
            chunks: {
                common: {
                    entry: "dist/common.js",
                    css: ["style.css"]
                },
                build: {
                    entry: "dist/build.js",
                    css: []
                }
            }
        }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }));
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}


//编译输出路径
module.exports = {
    debug: true,
    entry: {
        app: './src/main.js',
    },
    output: {
        path: __dirname + buildPath,
        filename: 'build.js',
        publicPath: publishPath,
        chunkFilename:"[id].build.js?v=[chunkhash]"
    },
    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint',
            exclude: /node_modules/
        },{
            test: /\.js$/,
            loader: 'eslint',
            exclude: /(node_modules|libs\\thridpart)/
        }],
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('vue-style-loader', 'css-loader')
        },{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!less-loader')
        },{
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        },{
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        },{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        },{
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }],
    },
    externals: {
        //cnzz: "_czc"
        hmt: "_hmt"
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('vue-style-loader', "css-loader"),
            less: ExtractTextPlugin.extract('vue-style-loader', "css-loader!less-loader")
        }
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
        //别名
        alias: {
            assets: path.join(__dirname, 'src/assets'),
            less: path.join(__dirname, 'src/assets/less'),
            component: path.join(__dirname, 'src/components'),
            libs: path.join(__dirname, 'src/libs'),
            config: path.join(__dirname, 'src/config'),
            service:path.join(__dirname,"src/service"),
            plugins:path.join(__dirname,"src/plugins"),
            store:path.join(__dirname,"src/store"),
        }
    },
    plugins: plugins
};
