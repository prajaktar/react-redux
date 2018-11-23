var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/app');
var BUILD_DIR = path.resolve(__dirname, 'src/public');

var config = {
    mode: 'development',
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};

module.exports = config;