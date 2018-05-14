const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')
const iconPath = path.resolve('src/assets/icon.png')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: distPath,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components')
    },
    modules: [srcPath, 'node_modules'],
    extensions: ['*', '.jsx', '.js', '.html', '.css', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
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
      name: 'PWA-ShoppingList',
      short_name: 'ShoppingList',
      theme_color: '#0fac78',
      background_color: '#0fac78',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: iconPath,
          sizes: [72, 96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
}
