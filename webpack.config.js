const webpack = require('webpack')

module.exports = {
    entry: './ex.2/index.js',
    output: {
        path:__dirname + 'public',
        filename: './bundle.js'
    },
    devServer:{
        port: 8088,
        contentBase: './public'
    }
}