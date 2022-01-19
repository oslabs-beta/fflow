const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [  
{
  mode: 'development',
  entry: './src/electron.ts',
  target: 'electron-main',
  output: {
    path: __dirname + '/dist',
    filename: 'electron.js'
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: [".js", ".jsx", ".tsx", ".ts"],
}
},
{ 
    mode: 'development',
    entry: './src/App.js',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: { 
      rules: [{
      test: /\.(jsx|js)$/,
      include: /src/,
      exclude: /node_modules/,
      use: [
        { 
        loader: 'babel-loader', options: { 
        presets: ['@babel/preset-env', '@babel/preset-react']
      } 
    }]},
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader','css-loader']
    },
  ],
  },
    resolve: {
      // Enable importing JS / JSX files without specifying their extension
      extensions: [".js", ".jsx"],
  },
    output: {
      path: __dirname + '/dist',
      filename: 'App.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ], 
    // devServer: { // used for development mode beyond this point
    //   static: {
    //     directory: './dist'
    //   },
    //   proxy: { // 
    //     '/api': 'http://localhost:3000' // server is listening on port 3000. proxy acts as a bridge to connect frontend and backend of our application 
    //   },
    //     compress: true,
    //     port: 8080, // where frontend is served on
    //   }
  }
]
