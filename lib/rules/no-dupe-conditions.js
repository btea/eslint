/**
 * @fileoverview Rule to disallow the same conditions in if statements
 * @author btea
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "Disallow the same conditions in if statements",
            recommended: false,
        },

        schema: [],

        messages: {
            condition: "Duplicate condition(s) found: {{conditions}}",
        }
    },

    create(context) {
		return {
			IfStatement(node) {
				const conditions = [];
				function extractConditions(conditionNode) {
					if (conditionNode.type === 'LogicalExpression') {
						extractConditions(conditionNode.left);
						extractConditions(conditionNode.right);
					} else {
						conditions.push(context.getSourceCode().getText(conditionNode));
					}
				}

				extractConditions(node.test);
				const duplicateConditions = conditions.filter((condition, index) => conditions.indexOf(condition) !== index);
				if (duplicateConditions.length > 0) {
					context.report({
						node: node.test,
                        messageId: "condition",
                        data: {
                            conditions: duplicateConditions.join(", "),
                        },
					});
				}
			}
		}
	}
};
