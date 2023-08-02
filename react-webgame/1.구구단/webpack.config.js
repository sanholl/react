const path = require('path');

module.exports = {
  name: 'gugudan',
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // development = eval / production = hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: { // 입력
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], // browserslist
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }],
  },
  output: { // 출력
    path: path.join(__dirname, 'dist'), // __dirname : 현재폴더
    filename: 'app.js'
  },
};