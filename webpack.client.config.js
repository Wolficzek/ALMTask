module.exports = {
    mode: "development",
    target: "web",
    entry: [
        "@babel/polyfill",
        "./client/client.jsx"
    ],
    resolve: {
        extensions: [".js", ".jsx", ".css"],
        modules: [process.cwd(), "node_modules"]
    },
    output: {
        publicPath: "/",
        filename: "client.js"
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: {
                                    browsers: "last 2 versions"
                                }
                            }],
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
}