const path = require("path")
const pathToPhaser = path.join(__dirname, "/node_modules/phaser/")
const phaser = path.join(pathToPhaser, "dist/phaser.js")

module.exports = {
    entry: "./index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader", exclude: "/node-modules"},
            {test: /phaser\.js$/, loader: "expose-loader?Phaser"}
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./"),
        publickPath: "/dist/",
        host: "127.0.0.1",
        port: 8765,
        open:true
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            phaser: phaser
        }
    }
}