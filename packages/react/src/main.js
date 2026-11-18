import jestPlugin from 'eslint-plugin-jest';
import reactPlugin from '@eslint-react/eslint-plugin';
import globals from 'globals';
import blueCatEngPlugin from '@bluecateng/eslint-plugin';
import blueCatEngCore from '@bluecateng/eslint-config-core';

export default {
	plugins: {...blueCatEngCore.plugins, jest: jestPlugin, ...reactPlugin.configs.recommended.plugins},
	languageOptions: {
		sourceType: 'module',
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
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
		...reactPlugin.configs.recommended.rules,
		'no-console': 'warn',
		'import-x/first': 'warn',
		'jest/prefer-to-be': 'warn',
		'@eslint-react/naming-convention-context-name': 'off',
		'@eslint-react/naming-convention-id-name': 'off',
		'@eslint-react/naming-convention-ref-name': 'off',
		'@eslint-react/no-array-index-key': 'off',
		'@eslint-react/no-children-count': 'off',
		'@eslint-react/no-children-for-each': 'off',
		'@eslint-react/no-children-map': 'off',
		'@eslint-react/no-children-only': 'off',
		'@eslint-react/no-children-to-array': 'off',
		'@eslint-react/no-clone-element': 'off',
		'@eslint-react/no-unnecessary-use-prefix': 'off',
		'@eslint-react/no-unused-class-component-members': 'off',
		'@eslint-react/purity': 'off',
		'@eslint-react/set-state-in-effect': 'off',
		'@eslint-react/static-components': 'off',
		'@eslint-react/use-state': 'off',
		'@eslint-react/web-api-no-leaked-event-listener': 'off',
		'@eslint-react/web-api-no-leaked-fetch': 'off',
		'@eslint-react/web-api-no-leaked-intersection-observer': 'off',
		'@eslint-react/web-api-no-leaked-interval': 'off',
		'@eslint-react/web-api-no-leaked-resize-observer': 'off',
		'@eslint-react/web-api-no-leaked-timeout': 'off',
	},
};
