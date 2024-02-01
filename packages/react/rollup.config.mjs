import yaml from '@rollup/plugin-yaml';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' assert {type: 'json'};

export default {
	input: './src/main',
	external: Object.keys(pkg.dependencies),
	output: {file: pkg.main, format: 'cjs', exports: 'default'},
	plugins: [yaml(), terser()],
	strictDeprecations: true,
};
