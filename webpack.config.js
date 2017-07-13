const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/view.js',
    output: {
        path: path.resolve( './dist/js'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};
