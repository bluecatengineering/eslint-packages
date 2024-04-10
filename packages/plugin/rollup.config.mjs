import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' with {type: 'json'};

export default {
	input: './src/main',
	external: Object.keys(pkg.peerDependencies),
	output: {file: pkg.module, format: 'es', exports: 'default'},
	plugins: [resolve(), terser()],
	strictDeprecations: true,
};
