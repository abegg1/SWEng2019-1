const commonPaths = require('./paths');

const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
        filename: `${commonPaths.jsFolder}/[name].[hash].js`,
        path: commonPaths.outputPath
    },
    optimization: {
        minimizer: [
            new terserPlugin({
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
                cache: true,
                sourceMap: true
            }),
            new optimizeCSSAssetsPlugin()
        ],
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial'
                },
                async: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'async',
                    chunks: 'async',
                    minChunks: 4
                }
            }
        },
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
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
    plugins: [
        new cleanWebpackPlugin(),
        new miniCssExtractPlugin({
            chunkFilename: `${commonPaths.cssFolder}/[name].css`,
            filename: `${commonPaths.cssFolder}/[name].css`
        })
    ],
    devtool: 'source-map'
};
