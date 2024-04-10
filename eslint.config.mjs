import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
	js.configs.recommended,
	{
		files: ['*.js'],
		languageOptions: {
			sourceType: 'script',
			globals: {module: 'readonly'},
		},
	},
	{
		files: ['**/*.mjs', 'packages/*/src/**/*.js'],
		languageOptions: {
			parser: babelParser,
			sourceType: 'module',
		},
	},
	{
		ignores: ['**/index.js'],
	},
];
