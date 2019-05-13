module.exports = {
	create(context) {
		return {
			FunctionDeclaration(node) {
				if (node.async) {
					context.report(node, 'Do not use async functions, return a promise instead');
				}
			},

			ArrowFunctionExpression(node) {
				if (node.async) {
					context.report(node, 'Do not use async functions, return a promise instead');
				}
			},

			AwaitExpression(node) {
				context.report(node, 'Do not use await expressions, use .then/.catch instead');
			},
		};
	},
};
