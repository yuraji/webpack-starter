const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.txt$/, use: 'raw-loader' },
			{
				test: /\.md$/,
				use: [
					{
						loader: "html-loader"
					},
					{
						loader: "markdown-loader",
						options: {
						}
					}
				]
			},

			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader', {
						loader: 'image-webpack-loader',
						options: {
							gifsicle: {interlaced: false, },
							optipng: {optimizationLevel: 7, },
							pngquant: {quality: '65-90', speed: 4 },
							mozjpeg: {progressive: true, quality: 65 },
							// Specifying webp here will create a WEBP version of your JPG/PNG images
							webp: {quality: 75 }
						}
					}
				]
			},
		],
	},
	plugins: [ 
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};
