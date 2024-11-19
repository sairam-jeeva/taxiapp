const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      util: require.resolve('util'),
      querystring: require.resolve('querystring-es3'),
      resolve: {
      fallback: {  
          http: false,
        },
    },
      fs: false, // fs is not available in browsers, so set to false
      net: false, // not usable in browser context
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
