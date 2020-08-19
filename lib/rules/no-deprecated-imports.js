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
    const BLACKLIST = [
      'Text',
      'Checkbox',
      'Input',
      'Box',
      'Flex',
      'StyledText',
    ];

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
        !!node.parent.parent.source &&
        node.parent.parent.source.value === 'eyeem-components'
      ) {
        if (BLACKLIST.includes(node.name)) {
          found[node.name] = true;
          const replaceWith = node.name === 'StyledText' ? 'Text' : node.name;

          context.report({
            node,
            message: `${node.name} component is deprecated. Refactor to use ${replaceWith} from @eyeem-ui instead.`,
          });
        }
      }
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Identifier: checkIdentifier,
    };
  },
};
