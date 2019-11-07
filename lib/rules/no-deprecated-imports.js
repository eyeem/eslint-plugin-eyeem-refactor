/**
 * @fileoverview Encourages EyeEm refactoring goals!
 * @author Eric Schaefer <eric@eyeem.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  create(context) {
    let found = {};
    const BLACKLIST = ['Text', 'Checkbox', 'Input'];

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    /**
     * Checks the identifier for blacklisted import from 'eyeem-components'.
     * @param {ASTNode} node The node to check.
     * @returns {void}
     */
    function checkIdentifier(node) {
      if (
        !found[node.name] &&
        node.parent.parent.source.value === 'eyeem-components'
      ) {
        if (BLACKLIST.includes(node.name)) {
          found[node.name] = true;

          context.report({
            node,
            message: `${node.name} component is deprecated. Refactor to use ${node.name} from @eyeem-ui instead.`
          });
        }
      }
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Identifier: checkIdentifier
    };
  }
};
