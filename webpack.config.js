const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProdaction = argv.mode === 'prodaction';
    const config = {
        entry: './src/scripts/index.js',
        output: {
            filename: 'index.js',
        },
        module: {
            rules: [{
                    test: /.js$/,
                    use: ['babel-loader'],
                },
                {
                    test: /.s?css$/,
                    use: [isProdaction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /.(jpg|png)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    }, ],
                },
            ],
        },
        devServer: {
            port: 9000,
            hot: true,
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
    }
    if (isProdaction) {
        config.plugins.push(new MiniCssExtractPlugin({
            filename: '[name].css',
        }))
    }
    return config
};