import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfig} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions):DevServerConfig {
	return {
		port: options.port,
		open: true,
		//fix error 'Cannot GET'
		historyApiFallback: true
	}
}