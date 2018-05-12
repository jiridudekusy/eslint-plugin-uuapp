/**
 * @fileoverview Enforces using text description for HDS a A* comments.
 * @author Jiří Dudek
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "enforses using text description in HDS a A* comments",
      category: "Best Practices",
      recommended: false
    },

    schema: [
      {
        type: "object",
        properties: {
          marks: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        additionalProperties: false
      }
    ]
  },

  create(context) {
    const sourceCode = context.getSourceCode(),
      configuration = context.options[0] || {},
      commentMarks = configuration.marks || ["HDS (\\d+\\.?)*", "A\\d+"];

    /**
     * Convert a comment mark into a RegExpe.
     *
     * @param {string} term A term to convert to a RegExp
     * @returns {RegExp} The term converted to a RegExp
     */
    function convertToRegExp(regexp) {
      let prefix;

      const suffix = "\\s*$";
      prefix = "^\\s*";
      return new RegExp(`${prefix}(${regexp})${suffix}`, "i");
    }

    const warningRegExps = commentMarks.map(convertToRegExp);

    /**
     * Checks the specified comment for matches of the configured marks and returns the matches.
     * @param {string} comment The comment which is checked.
     * @returns {Array} All matched warning terms for this comment.
     */
    function commentContainsWarningTerm(comment) {
      const matches = [];

      warningRegExps.forEach(regex => {
        let match = regex.exec(comment);
        if (match) {
          matches.push(match[1]);
        }
      });

      return matches;
    }

    /**
     * Checks the specified node for matching marked comments and reports them.
     * @param {ASTNode} node The AST node being checked.
     * @returns {void} undefined.
     */
    function checkComment(node) {
      const matches = commentContainsWarningTerm(node.value);

      matches.forEach(matchedTerm => {
        context.report({
          node,
          message: "Comment for '{{matchedTerm}}' is missing text description.",
          data: {
            matchedTerm
          }
        });
      });
    }

    return {
      Program() {
        const comments = sourceCode.getAllComments();

        comments.filter(token => token.type !== "Shebang").forEach(checkComment);
      }
    };
  }
};
