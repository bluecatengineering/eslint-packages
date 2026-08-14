import js from '@eslint/js';

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
			sourceType: 'module',
		},
	},
	{
		ignores: ['**/index.mjs'],
	},
];
