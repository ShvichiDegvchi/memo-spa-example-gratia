const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    'memo-spa-example-gratia/common/js/bundle': './src/index.js',
  },
  output: {
    filename: '[name].min.js',
    chunkFilename: `memo-spa-example-gratia/common/js/chunks/[name].min.js`,
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/docs'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              hotReload: true,
            },
          },
        ],
      }, {
        test: /\.(sc|c|sa)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: process.env.NODE_ENV === 'development' ? true : false,
              importLoaders: 2,
            },
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
              sourceMap: process.env.NODE_ENV === 'development' ? true : false,
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      }, {
        test: /\.(jsx|js)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.scss',
      '.vue',
      '.html',
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'src/app'),
      '~pug': path.resolve(__dirname, 'src/pug'),
      '~docs': path.resolve(__dirname, 'dist/docs'),
    },
  },
  optimization: {},
  plugins: [
    new StylelintPlugin({
      files: [
        '**/*.vue',
        '**/*.scss',
      ],
    }),
    new ESLintPlugin(),
    new VueLoaderPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      https: true,
      open: 'external',
      port: 3000,
      notify: true,
      online: true,
      watchTask: true,
      server: {
        baseDir: './dist/docs',
        directory: true,
      },
      files: [
        './dist/docs/memo-spa-example-gratia/*.html',
        './dist/docs/memo-spa-example-gratia/common/js/*.js',
      ],
    }),
  ],
};
