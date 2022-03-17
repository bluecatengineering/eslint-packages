const ordinals = ['first', 'second', 'third'];

export default {
	create(context) {
		let connectName;

		function checkArgument(arg, index, expected) {
			if (arg.type !== 'Identifier') {
				context.report(arg, `The ${ordinals[index]} argument must be an identifier`);
				return;
			}
			const name = arg.name;
			if (name !== expected && name !== 'undefined') {
				context.report(arg, `The name of the ${ordinals[index]} argument must be ${expected}`);
			}
		}

		return {
			ImportDeclaration(node) {
				if (node.source.value === 'react-redux') {
					node.specifiers.forEach((s) => {
						if (s.type === 'ImportSpecifier' && s.imported.name === 'connect') {
							connectName = s.local.name;
						}
					});
				}
			},

			CallExpression(node) {
				if (node.callee.type === 'Identifier' && node.callee.name === connectName) {
					const args = node.arguments;
					if (args.length < 1 || args.length > 4) {
						context.report(node, 'Must pass one to four arguments');
						return;
					}
					checkArgument(args[0], 0, 'mapStateToProps');
					if (args.length > 1) {
						checkArgument(args[1], 1, 'mapDispatchToProps');
					}
					if (args.length > 2) {
						checkArgument(args[2], 2, 'mergeProps');
					}
				}
			},
		};
	},
};
