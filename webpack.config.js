// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserWebpackPlugin = require('terser-webpack-plugin');

// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production';
const config = {
    mode: isProd ? 'production' : 'development',
    entry: {
        index: './src/index.ts',
    },
    output: {
        // eslint-disable-next-line no-undef
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'Index',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true

    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
            },
            {
                test: /\.js?$/,
                use: [require.resolve('source-map-loader')],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader','css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'root-entry-name': 'default',
                                }
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};

// eslint-disable-next-line no-undef
module.exports = config;
