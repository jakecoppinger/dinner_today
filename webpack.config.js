const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        })
        // ,
        // new CopyWebpackPlugin([
        //        { from: 'node_modules/vue/dist/vue.min.js' },
        //     ],{
        //         ignore: [
        //             // Doesn't copy any files with a txt extension    
        //             '*.txt',
                    
        //             // Doesn't copy any file, even if they start with a dot
        //             '**/*',

        //             // Doesn't copy any file, except if they start with a dot
        //             { glob: '**/*', dot: false }
        //         ],

        //         // By default, we only copy modified files during
        //         // a watch or webpack-dev-server build. Setting this
        //         // to `true` copies all files.
        //         copyUnmodified: true
        //     })
    ],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.common.js'
      }
    }
};


