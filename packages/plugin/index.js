'use strict';

module.exports = {
	rules: {
		'intl-strings': require('./rules/intl-strings'),
		'no-async': require('./rules/no-async'),
		'no-postincrement': require('./rules/no-postincrement'),
		'redux-connect-arguments': require('./rules/redux-connect-arguments'),
	},
	configs: {
		recommended: {
			rules: {
				'@bluecateng/no-async': 'error',
				'@bluecateng/no-postincrement': 'warn',
			}
		},
		react: {
			rules: {
				'@bluecateng/intl-strings': 'error',
				'@bluecateng/redux-connect-arguments': 'warn',
			}
		}
	}
};
