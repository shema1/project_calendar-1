  module.exports = {
      entry: './src/scripts/index.js',
      output: {
          filename: 'index.js',
      },
      module: {
          rules: [{
                  test: /.js$/,
                  use: ['babel-loader'],
              },
              {
                  test: /.s?css$/,
                  use: ['style-loader', 'css-loader', 'sass-loader'],
              },
              {
                  test: /.(jpg|png)$/,
                  use: [{
                      loader: 'url-loader',
                      options: {
                          limit: 8192,
                          name: '[name].[ext]',
                          outputPath: 'images',
                      },
                  }, ],
              },
          ],
      },
  };