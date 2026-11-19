import noAsync from './no-async';
import noPostIncrement from './no-postincrement';
import reduxConnectArgs from './redux-connect-arguments';

export default {
	rules: {
		'no-async': noAsync,
		'no-postincrement': noPostIncrement,
		'redux-connect-arguments': reduxConnectArgs,
	},
	configs: {
		recommended: {
			rules: {
				'@bluecateng/no-async': 'error',
				'@bluecateng/no-postincrement': 'warn',
			},
		},
		react: {
			rules: {
				'@bluecateng/redux-connect-arguments': 'warn',
			},
		},
	},
};
