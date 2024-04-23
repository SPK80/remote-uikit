import HtmlWebPackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin.js";
import Dotenv from "dotenv-webpack";
import { exposes } from "./src/components/uikit/exposes";
import path from "path";

export default (_, argv) => {
  console.log("__dirname", __dirname);

  return {
    output: {
      publicPath: "http://localhost:3001/",
      path: path.join(__dirname, "public/"),
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3001,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "remote",
        filename: "remoteEntry.js",
        remotes: {},
        exposes,
        shared: ["react", "react-dom"],
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv(),
    ],
  };
};
