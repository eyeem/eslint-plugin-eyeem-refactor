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
    const BLOCKLIST_EYEEM_COMPONENTS = [
      'Text',
      'Checkbox',
      'Input',
      'Box',
      'Flex',
      'StyledText',
    ];

    const BLOCKLIST_STYLED_COMPONENTS = [
      'styled',
    ]

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
        if (BLOCKLIST_EYEEM_COMPONENTS.includes(node.name)) {
          found[node.name] = true;
          const replaceWith = node.name === 'StyledText' ? 'Text' : node.name;

          context.report({
            node,
            message: `${node.name} component is deprecated. Refactor to use ${replaceWith} from @eyeem-ui instead.`,
          });
        }
      }
      if (
        !found[node.name] &&
        !!node.parent.parent.source &&
        node.parent.parent.source.value === 'styled-components'
      ) {
        if (BLOCKLIST_STYLED_COMPONENTS.includes(node.name)) {
          found[node.name] = true;
          
          context.report({
            node,
            message: `${node.name} from styled-components is deprecated. Refactor to use ${node.name} from @emotion instead.`,
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
