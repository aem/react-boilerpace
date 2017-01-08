import { clientConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import configuration from './webpack.config.dev';

export default clientConfiguration(configuration, settings);
