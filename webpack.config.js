var webpack = require('webpack');
var path = require('path');

module.exports ={
	//devtool gives us line errors for accessing debugging
	devtool: 'inline-source-map',
	//defines where webpack is going to look for the files
	entry: [
		//the first line is for webpack-dev-server
		'webpack-dev-server/client?http://127.0.0.1:8080',
		//this line is for live reload
		'webpack/hot/only-dev-server',
		//this last line is the folder for webpack to look for initial file
		//there is no file name so by default its lookin for index.js
		'./src'
	],
	//this is where for production we would output our files
	//but in this tutorial app we are using web-dev-server
	output: {
		//for production it would output it to that public directory
		//but for this it will not
		path: path.join(__dirname, 'public'),
		//the file that its going into is bundle.js which is standard
		//naming convention
		filename: 'bundle.js'
	},
	//this is where webpack is going to look for the files to bundle together
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	//this is where we define our loaders
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader/webpack', 'babel?presets[]=react,presets[]=es2015']
			}
		]
	},
	plugins: [
		//this is also for live reloading
		new webpack.HotModuleReplacementPlugin(),
		//this is a plugin to stop it from compiling if there are errors
		new webpack.NoErrorsPlugin()
	]
};