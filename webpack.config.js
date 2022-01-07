const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
},
  module:{
    rules:[
      {
        test: /\.(png|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      }
    ]
  }
};