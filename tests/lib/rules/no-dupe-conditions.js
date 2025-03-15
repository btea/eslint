/**
 * @fileoverview Tests for no-dupe-conditions rule.
 * @author btea
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-dupe-conditions"),
    RuleTester = require("../../../lib/rule-tester/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-dupe-conditions", rule, {
    valid: [
        "if (a === 1) {}"
    ],
    invalid: [
        {
            code: "if (a === 1 || a === 1) {}",
            output: null,
            errors: [{ messageId: "condition", type: "LogicalExpression" }]
        },
        {
            code: "if (a === 1 || a === 1 || a === 1) {}",
            output: null,
            errors: [{ messageId: "condition", type: "LogicalExpression" }]
        },
        {
            code: "if (a === 1 && a === 1) {}",
            output: null,
            errors: [{ messageId: "condition", type: "LogicalExpression" }]
        },
        {
            code: "if (a == 1 || a == 1) {}",
            output: null,
            errors: [{ messageId: "condition", type: "LogicalExpression" }]
        },
        {
            code: "if (a != 1 || a != 1) {}",
            output: null,
            errors: [{ messageId: "condition", type: "LogicalExpression" }]
        },
    ]
});
