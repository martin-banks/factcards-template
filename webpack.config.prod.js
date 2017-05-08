/* eslint-env node */

// const webpack = require("webpack")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const publicPath = require('./src/publicPath')

module.exports = {
	// entry: __dirname + '/src/app.js',
	entry: path.join(__dirname, '/src/app.js'),
	output: {
		filename: 'app.min.js',
		path: path.join(__dirname, '/BUILD/PROD/'),
		publicPath,
	},
	resolve: {
		extensions: ['.js', '.css'],
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract({
					loader: [
						{
							loader: 'css-loader',
							query: {
								localIdentName: '[name]__[local]___[hash:base64:5]',
								modules: true,
								minimize: true,
							},
						},
						{
							loader: 'postcss-loader',
						},
					],
				}),
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
				],
			},
		],
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(__dirname, '/src/preview.html'),
			filename: 'index.html',
			inject: 'body',
		}),
		new ExtractTextPlugin({
			filename: 'app.min.css',
			allChunks: true,
		}),
	],

}

