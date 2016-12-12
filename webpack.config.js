module.exports = {
	devtool: 'source-map',
	entry: './client/js/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/client/js/compiled'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets: ['es2015', 'react', 'stage-1'] }
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}
}