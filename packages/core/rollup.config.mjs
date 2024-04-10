import yaml from '@rollup/plugin-yaml';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' with {type: 'json'};

export default {
	input: './src/main',
	external: Object.keys(pkg.dependencies),
	output: {file: pkg.module, format: 'es', exports: 'default'},
	plugins: [yaml(), terser()],
	strictDeprecations: true,
};
