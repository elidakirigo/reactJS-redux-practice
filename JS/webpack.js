/**
 * --------------------------------------------
 * INSTALLING WEBPACK
 * -------------------
 * npm install -g webpack
 * npm install babel-core babel-loader babel-preset-env
 * babel-preset-react babel-preset-stage-o --save-dev
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
    }
 }
* --------------------------------------------
*/