const path = require('path');

module.exports = {
  // Entrada de los archivos
  entry: './src/index.js',
  
  // Salida: archivo final de tu proyecto
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Configuración de los loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  // Modo de Webpack (desarrollo o producción)
  mode: 'development',

  // Configuración del servidor de desarrollo
  devServer: {
    static: path.join(__dirname, 'dist'), // Cambiado de contentBase a static
    compress: true,
    port: 9000,
    open: true  // Esto abrirá automáticamente el navegador
  }
};
