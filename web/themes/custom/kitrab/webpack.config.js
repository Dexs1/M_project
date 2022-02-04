const path = require('path');
const miniCss = require('mini-css-extract-plugin');

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если
                                             // при запуске вебпака было указано --mode=production
  mode = 'production';
}

module.exports = {
  mode,
  entry: './src/index.js', // Указываем точку входа - главный модуль приложения,
  // в который импортируются все остальные
  devtool: 'source-map',
  devServer: {
    hot: true, // Включает автоматическую перезагрузку страницы при изменениях
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
    // размещаться итоговый бандл, папка dist в корне приложения
    clean: true, // Очищает директорию dist перед обновлением бандла
    // Свойство стало доступно с версии 5.20.0, до этого использовался
    // CleanWebpackPlugin

  },
  module: {
    rules: [{
      test:/\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
  ]
}
