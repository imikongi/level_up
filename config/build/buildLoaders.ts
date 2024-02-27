import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

	const scssLoader = {
			test: /\.s[ac]ss$/i,
			use: [
				// Creates `style` nodes from JS strings
				isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
				// Translates CSS into CommonJS
				{
					loader: 'css-loader',
					options: {
						modules: {
							auto: /\.module\.(css|scss)$/,
							localIdentName: isDev
								? '[path][name]__[local]'
								: '[hash:base64:8]'
						}
					}
				},
				// Compiles Sass to CSS
				"sass-loader",
			],
		}

	const tsLoader = {
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}

	return [tsLoader, scssLoader]
}