import webpack from 'webpack';
import path from 'path';

export default {
	  debug: true,
	  noInfo: false,
	  devtool: 'inline-source-map',
    entry: ['babel-polyfill',path.join(__dirname, 'src', 'app-client.js')],
	  target: 'web',
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
			  publicPath:"/js",
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: path.join(__dirname, 'src'),
            exclude: [path.join(__dirname, 'src', 'server.js'), path.join(__dirname, 'src', 'server-test.js'), path.join(__dirname, 'src', 'startMessage.js')],
            loader: ['babel-loader'],
            query: {
                    cacheDirectory: 'babel_cache',
                    //presets: ['react','es2015', 'stage-0']
                }
            },
            //{ test: /\.css$/, loader: "style-loader!css-loader" },
						{ test: /\.css$/, loaders: ['style','css'] },
            { test: /\.json$/, loader: "json-loader"}]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("dev")
        }),
        /*new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })*/
    ]
};
