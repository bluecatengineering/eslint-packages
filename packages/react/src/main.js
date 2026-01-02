import jestPlugin from 'eslint-plugin-jest';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import blueCatEngPlugin from '@bluecateng/eslint-plugin';
import blueCatEngCore from '@bluecateng/eslint-config-core';
import babelParser from '@babel/eslint-parser';

export default {
	plugins: {...blueCatEngCore.plugins, jest: jestPlugin, react: reactPlugin, 'react-hooks': reactHooksPlugin},
	languageOptions: {
		parser: babelParser,
		sourceType: 'module',
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			babelOptions: {
				rootMode: 'upward',
			},
		},
		globals: {
			...blueCatEngCore.languageOptions.globals,
			...globals.browser,
			...globals.jest,
			jsdom: 'readonly',
		},
	},
	rules: {
		...blueCatEngCore.rules,
		...blueCatEngPlugin.configs.react.rules,
		...jestPlugin.configs['flat/recommended'].rules,
		...reactPlugin.configs.flat.recommended.rules,
		...reactPlugin.configs.flat['jsx-runtime'].rules,
		...reactHooksPlugin.configs.recommended.rules,
		'no-console': 'warn',
		'import/first': 'warn',
		'jest/prefer-to-be': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-unescaped-entities': 'off',
		'react-hooks/preserve-manual-memoization': 'off',
		'react-hooks/purity': 'off',
		'react-hooks/refs': 'off',
		'react-hooks/set-state-in-effect': 'off',
	},
};
