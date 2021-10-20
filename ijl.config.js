module.exports = {
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${versions}/`,
    },
  },
  features: {
    'innoreact': {
      main: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name]-[sha1:hash:7].[ext]',
            },
          },
        ],
      },
    ],
  },
  navigations: {
    'innoreact': '/innoreact',
  },
};
