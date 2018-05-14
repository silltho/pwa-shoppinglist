const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new WebpackPwaManifest({
      name: 'PWA-ShoopingList',
      short_name: 'ShoppingList',
      theme_color: '#0fac78',
      background_color: '#0fac78',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [72, 96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  }
}
