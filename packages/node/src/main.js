import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';
import blueCatEngCore from '@bluecateng/eslint-config-core';

export default {
	plugins: {...blueCatEngCore.plugins, jest: jestPlugin},
	languageOptions: {
		globals: {
			...blueCatEngCore.languageOptions.globals,
			...globals.jest,
		},
	},
	rules: {
		...blueCatEngCore.rules,
		...jestPlugin.configs['flat/recommended'].rules,
		'jest/prefer-to-be': 'warn',
	},
};
