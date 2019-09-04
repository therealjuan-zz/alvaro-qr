module.exports = {
    mode: 'development',

    entry: {
        main: './src/web/frontend/main.tsx',
    },

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: __dirname + '/dist/web/frontend',
        publicPath: '/assets/'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },

            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        usedExports: true
    }
}