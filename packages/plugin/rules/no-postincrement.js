const forbiddenTypes = {
	ExpressionStatement: true,
	ForStatement: true,
};

module.exports = {
	meta: {
		type: 'suggestion',
		fixable: 'code',
	},

	create(context) {
		return {
			UpdateExpression(node) {
				if (!node.prefix && node.parent.type in forbiddenTypes) {
					context.report({
						node,
						message: 'Do not use post-increment, use pre-increment instead',
						fix: fixer => fixer.replaceText(node, node.operator + node.argument.name),
					});
				}
			},
		};
	},
};
