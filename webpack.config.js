const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const configuration = (env, argv) => {
    console.log(argv.mode)
    const isDev = argv.mode === 'development'
    return {
        context: path.resolve('src'),
        entry: {
            index: './index.tsx'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: 'dist'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        //"style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS
                    ]
                },
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { 
                    test: /\.tsx?$/, 
                    loader: "awesome-typescript-loader" 
                },

                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { 
                    enforce: "pre", 
                    test: /\.js$/, 
                    loader: "source-map-loader" 
                }
            ]
        },
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        // externals: {
        //     "react": "React",
        //     "react-dom": "ReactDOM"
        // },
        // Extensions supported by the projecto to handled typescript code.
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".json"]
        },
        // Extract transpiled css and minified. Then, it is stored on 
        // dist/styles.css for production
        plugins: [
            new MiniCssExtractPlugin({
                chunkFilename: '[id].css',
                filename:'[name].css'
            })
        ],
        // Allow debug code in browser when webpack dev server is running. 
        devtool: isDev ? 'source-map': false
    }
}

module.exports = configuration