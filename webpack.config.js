const webpack = require('webpack');
const dotenv = require('dotenv').config({path: __dirname+'/.env'});
module.exports = {
    plugins: [
        new webpack.DefinePlugin({"process.env": dotenv.parsed})
    ]
};