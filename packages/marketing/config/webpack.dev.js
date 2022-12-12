const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: { //for navigation I guess
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename:'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom']
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);