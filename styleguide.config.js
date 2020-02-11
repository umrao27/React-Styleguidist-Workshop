
const sections = require('./styleguide/sections');
const { version } = require('./package.json');
module.exports = {
  title: 'React Styleguidist Workshop',
  sections: [...sections],
  version,
  components: '../src/components/[A-Z]**/*.js', // index.js
  ignore: ['**/src/test.js'],
  require: ['./src/styles/styles.scss'],
  styles:{
    fontFaily:{
      base:['"Open Sans", Arial, Helvetia, sans-serif']
    }
  },

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader','sass-loader']
        }
      ]
    }
  }
};