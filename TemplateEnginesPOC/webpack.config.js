var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        "ReactApp": "./Scripts/Components/app.jsx"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        // export itself to a global var
        libraryTarget: "var",
        // name of the global var: "Foo"
        library: "[name]"
    },
    module: {
        loaders: [
          {
              test: /\.jsx?$/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'stage-0', 'react']
              }
          }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.ProvidePlugin({
          React: "React", react: "React", "window.react": "React", "window.React": "React"
      })
    ]
    
    //plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //       exclude: /node_modules/
    //   })
    //],
    //externals: {
    //    React: "react"
    //}
};
