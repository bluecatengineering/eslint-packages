const fs = require('fs');
const path = require('path');

const parser = require('intl-messageformat-parser');
const yaml = require('js-yaml');

let keys, timestamp;

const fileChanged = path => {
	const ts = fs.statSync(path).mtime.getTime();
	if (timestamp !== ts) {
		timestamp = ts;
		return true;
	}
	return false;
};

const extractParams = (elements, params) => {
	elements.forEach(e => {
		if (e.type !== 0) {
			params.push(e.value);
			if (e.options) {
				Object.values(e.options).forEach(o => extractParams(o.value, params));
			}
		}
	});
	return params;
};

const loadStrings = filePath => {
	keys = {};
	const strings = yaml.safeLoad(fs.readFileSync(filePath));
	Object.entries(strings).forEach(([k, v]) => (keys[k] = v ? extractParams(parser.parse(v), []) : []));
};

module.exports = {
	create(context) {
		const dirname = path.dirname(context.getFilename());
		return {
			ImportDeclaration(node) {
				const modulePath = node.source.value;
				if (/(^\.|\.\.)\/strings$/.test(modulePath)) {
					const filePath = path.join(dirname, modulePath, 'en.strings.yaml');
					if (fileChanged(filePath)) {
						loadStrings(filePath);
					}
					if (node.specifiers.length === 0) {
						context.report(node, 'Import strings as __');
						return;
					}
					let spec0 = node.specifiers[0];
					if (spec0.type === 'ImportDefaultSpecifier' && spec0.local.name !== '__') {
						context.report(spec0, 'Import strings as __');
					}
					return;
				}
				if (node.specifiers.length !== 0) {
					let spec0 = node.specifiers[0];
					if (spec0.type === 'ImportDefaultSpecifier' && spec0.local.name === '__') {
						context.report(spec0, 'Only strings can be imported as __');
					}
				}
			},

			CallExpression(node) {
				if (node.callee.type === 'Identifier' && node.callee.name === '__') {
					const args = node.arguments;
					if (args.length < 1 || args.length > 2) {
						context.report(node, 'Must pass one or two arguments');
						return;
					}
					const arg0 = args[0];
					if (arg0.type !== 'Literal' || typeof arg0.value !== 'string') {
						context.report(arg0, 'The first argument must be a string literal');
						return;
					}
					const params = keys[arg0.value];
					if (!params) {
						context.report(arg0, 'Key not found');
						return;
					}
					if (params.length === 0) {
						if (args.length === 2) {
							context.report(args[1], "The template doesn't have any parameters");
						}
						return;
					}
					if (args.length !== 2) {
						context.report(arg0, 'The template requires parameters: ' + params.join(', '));
						return;
					}
					const arg1 = args[1];
					if (arg1.type === 'ObjectExpression') {
						const found = arg1.properties.map(p => {
							if (p.type !== 'Property') {
								context.report(p, 'Must specify explicit key/value pairs');
								return null;
							}
							const key = p.key;
							const name = key.name;
							if (!params.includes(name)) {
								context.report(key, 'Parameter not found in template');
							}
							return name;
						});
						const missing = params.filter(p => !found.includes(p));
						if (missing.length !== 0) {
							context.report(arg1, 'Missing template arguments: ' + missing.join(', '));
						}
					} else if (arg1.type !== 'Identifier') {
						context.report(arg1, 'The second argument must be either an object literal or an identifier');
					}
				}
			},
		};
	},
};
