const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['./src/index.js', './src/scss/style.scss'],
	output: {
		filename: 'js/bundle.js',
		path: path.join(__dirname, 'build')
	},
	module: {
		loaders: [
			{
				test: /(\.css|\.scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								modules: false
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css', {
			allChunks: true
		})
	]
};
