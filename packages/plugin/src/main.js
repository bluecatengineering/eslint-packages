import intlStrings from './intl-strings';
import noAsync from './no-async';
import noPostIncrement from './no-postincrement';
import reduxConnectArgs from './redux-connect-arguments';

export default {
	rules: {
		'intl-strings': intlStrings,
		'no-async': noAsync,
		'no-postincrement': noPostIncrement,
		'redux-connect-arguments': reduxConnectArgs,
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
