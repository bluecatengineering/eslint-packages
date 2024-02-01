import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' assert {type: 'json'};

export default {
	input: './src/main',
	external: Object.keys(pkg.peerDependencies),
	output: {file: pkg.main, format: 'cjs', exports: 'default'},
	plugins: [resolve(), terser()],
	strictDeprecations: true,
};
