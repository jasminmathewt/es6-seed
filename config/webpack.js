const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, '../src/index.js'),
    devtool: "source-map",
    module: {
        rules: [
          {
             test: /\.(s(a|c)ss)$/,
             use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
          },
         /*  {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          } */
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, '../server/public'),
        filename: 'bundle.js',
    },
    plugins: [new MiniCssExtractPlugin()],
};