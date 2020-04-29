//引用path模組
const path = require('path');
module.exports = {
    //如果有一個以上的檔案需要打包，可以傳陣列給entry
    entry: ['./src/index.jsx','./Message.jsx'],
    output: {
        filename: 'src/index_bundle.js',
        path: path.resolve('./'),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            { test: /\.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets:  ['@babel/preset-react','@babel/preset-env'] } } },
            { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
        ]
    },
    devServer: {
        //指定開啟port為9000
        port: 9000
    }
};
