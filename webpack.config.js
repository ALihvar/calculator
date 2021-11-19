const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const OptimazeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
   const config = {
       splitChunks: {
           chunks: 'all'
       }
   } 

   if (isProd) {
       config.minimazer = [
           new OptimazeCssAssetsWebpackPlugin(),
           new TerserWebpackPlugin()
       ]
   }
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',
    entry: './src/index.jsx',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
    },
    devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        
        new MiniExtractPlugin({
            filename: filename('css'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                   
                use: [
                    MiniExtractPlugin.loader,
                    'css-loader'
                ]
            },
           
            {
                test: /\.(sass|scss)$/,
                   
                use: [
                    MiniExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash].[ext]'
                }
            },
            
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-react', {
                                debug: true,
                                corejs: 3,
                                useBuiltIns: 'usage'
                            }]
                        ],
                        plugins: [

                        ]
                    }
                }
            }
        ]
    }
}