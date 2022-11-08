// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const config = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
    devServer: {
        port: 8080,
        // open: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
};
module.exports = config;
