const commonPaths = require('./paths');

const webpack = require('webpack');

module.exports = {
    mode: 'development',
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
