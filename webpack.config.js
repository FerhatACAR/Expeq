const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    HotModuleReplacementPlugin,
    NoEmitOnErrorsPlugin
} = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

module.exports = [{
        name: "client",
        mode: "development",
        entry: [
            'react-hot-loader/patch',
            path.join(CURRENT_WORKING_DIR, 'client/src/index.js')
        ],
        output: {
            path: path.join(CURRENT_WORKING_DIR, '/dist'),
            filename: 'bundle.js',
            chunkFilename: '[id].js',
            publicPath: ''
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.(ttf|eot|svg|gif|jpg|png|ico|mp4)(\?[\s\S]+)?$/,
                    use: 'file-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
        plugins: [
            new HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: "Expeq",
                template: './client/src/index.html',
                favicon: './client/src/favicon.png'
            }),
            new NoEmitOnErrorsPlugin(),
            new Dotenv()
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            inline: true,
            port: 9001,
            open: 'firefox',
            hot: true,
        }
    },
    {
        name: "server",
        entry: [
            path.join(CURRENT_WORKING_DIR, './server/server.js')
        ],
        target: "node",
        output: {
            path: path.join(CURRENT_WORKING_DIR, '/dist'),
            filename: "serverBundle.js",
            publicPath: '',
            libraryTarget: "commonjs2"
        },
        externals: [nodeExternals()],
        plugins: [
            new Dotenv()
        ],
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.(ttf|eot|svg|gif|jpg|png|ico|mp4)(\?[\s\S]+)?$/,
                    use: 'file-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        }
    }
];
