module.exports = {
  "output": {
    "filename": "[name].pack.js"
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
    ]
  },
  "entry": {
    "index": "./index"
  }
};