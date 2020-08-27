/**
 * --------------------------------------------
 * INSTALLING WEBPACK
 * -------------------
 * npm install -g webpack
 * npm install babel-core babel-loader babel-preset-env
 * babel-preset-react babel-preset-stage-o --save-dev
 * 
 * MINIFYING / UGLYFYING WITH WEBPACK
 * ----------------------------------
 * npm install webpack --save-dev
 * setting 'warnings' to false removes all console logs in the output. 
 * 
 * ADDING REACT WITH WEBPACK
 * --------------------------
 * npm install react react-dom --save
 * 
 * always set the source map to ensure you map original files
 * 
 * set here : webpack.config.js
 * 
 * module.exports = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: ['babel-loader'],
            query: {
                presets: ['env', 'stage-0', 'react']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })    
    ]
 }
* --------------------------------------------
*/