const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')


module.exports = {
	entry: './src/scripts.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: "build.[contenthash].js",
    },

  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx']
},
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/users': 'http://localhost:8000',
            changeOrigin:true,
        publicPath: '/dist/',
}
    },
    plugins: [new MiniCssExtractPlugin(),
    		 new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
    ],

    module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"]
            }
        }
},
      {
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




