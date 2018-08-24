let path = require('path');
let HtmlPlugin = require('html-webpack-plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'app'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        sourceMapFilename: 'app.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.css']
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
         }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}