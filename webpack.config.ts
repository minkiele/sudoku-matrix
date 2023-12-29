import { Configuration } from 'webpack';

const config: Configuration = {
    mode: 'production',
    entry: `${__dirname}/src/index.ts`,
    output: {
        path: `${__dirname}/lib`,
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.ts$/i,
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: `${__dirname}/webpack.tsconfig.json`,
                }
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            'node_modules',
        ]
    },
    devtool: false
};

export default config;
