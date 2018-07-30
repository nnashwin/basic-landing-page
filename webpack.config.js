const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'example/public');
const APP_DIR = path.resolve(__dirname, 'example/')

process.env.NODE_ENV = 'development';

const config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				include: APP_DIR,
				loader: ['style-loader', 'css-loader']
			}
		]
	}
};

module.exports = config;
