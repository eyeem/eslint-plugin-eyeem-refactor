/**
 * @fileoverview Checks for usage of classnames module.
 * @author Eric Schaefer <eric@eyeem.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  create(context) {
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    /**
     * Checks the identifier for classnames module'.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     */
    function checkIdentifier(node) {
      if (node.source.value === 'classnames') {
        context.report({
          node,
          message: `classnames is deprecated for us! Refactor this component to not use old CSS stylesheets.`
        });
      }
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ImportDeclaration: checkIdentifier
    };
  }
};
