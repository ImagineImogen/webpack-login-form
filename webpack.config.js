const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: './src/scripts.js',
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    devtool: "source-map",
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
    rules: [{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, {
      	      loader: "css-loader", 
      	      options: {
      	      		sourceMap: true
      	      	}
      }
     ]
    }
   ]
}
}




