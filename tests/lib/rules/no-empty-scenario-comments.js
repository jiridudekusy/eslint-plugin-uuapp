/**
 * @fileoverview Enforces using text description for HDS a A* comments.
 * @author Jiří Dudek
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-empty-scenario-comments"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-empty-scenario-comments", rule, {
  valid: [
    {code: "// any comment"},
    {code: "// hds 1.2 - test step"},
    {code: "// hds 10.2 - test step"},
    {code: "// A1 - test step"},
    {code: "// A345 - test step"},
  ],

  invalid: [
    {
      code: "// HDS 2.1",
      errors: [
        {
          message: "Comment for 'HDS 2.1' is missing text description.",
          type: "Line"
        }
      ]
    },
    {
      code: "// hds 43.1         ",
      errors: [
        {
          message: "Comment for 'hds 43.1' is missing text description.",
          type: "Line"
        }
      ]
    },
    {
      code: "// hds 43.1.3.5.6         ",
      errors: [
        {
          message: "Comment for 'hds 43.1.3.5.6' is missing text description.",
          type: "Line"
        }
      ]
    },
    {
      code: "// A1         ",
      errors: [
        {
          message: "Comment for 'A1' is missing text description.",
          type: "Line"
        }
      ]
    },
    {
      code: "// A3456         ",
      errors: [
        {
          message: "Comment for 'A3456' is missing text description.",
          type: "Line"
        }
      ]
    }
  ]
});
