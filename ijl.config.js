const pkg = require('./package');

const versions = process.env.VERSION ? 'main': pkg.version;

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${versions}/`,
    },
  },
  features: {
    'innoreact': {
      registration: true,
      map: true,
      main: true,
      message: true,
    },
  },
  config: {
    'yandex.map.key': '92c61db5-c1dd-4111-ba56-491f6a0a4975',
    'yandex.url.map.key': 'https://api-maps.yandex.ru/2.1/?apikey',
    'innoreact.api': '/api',
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
    'link.innoreact.main': '/innoreact/main',
    'link.innoreact.map': '/innoreact/map',
    'link.innoreact.registration': '/innoreact/registration',
    'link.innoreact.price': '/innoreact/price',
  },
};
