const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')
const iconPath = path.resolve('src/assets/icon.png')
const swPath = path.resolve(__dirname, 'src/sw.js')

const htmlWebpackPluginImpl = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const webpackPwaManifestImpl = new WebpackPwaManifest({
  name: 'PWA-ShoppingList',
  short_name: 'ShoppingList',
  theme_color: '#0fac78',
  background_color: '#0fac78',
  display: 'standalone',
  orientation: 'portrait',
  scope: '/',
  start_url: '/',
  gcm_sender_id: '103953800507',
  icons: [
    {
      src: iconPath,
      sizes: [72, 96, 128, 192, 256, 384, 512] // multiple sizes
    }
  ]
})

const workboxPluginImpl = new InjectManifest({
  swSrc: swPath,
  swDest: 'sw.js'
})

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: distPath,
    filename: 'bundle.js'
  },
  mode: 'development',
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
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPluginImpl, webpackPwaManifestImpl, workboxPluginImpl]
}
