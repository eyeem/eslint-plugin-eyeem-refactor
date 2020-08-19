/**
 * @fileoverview Encourages EyeEm refactoring goals!
 * @author Eric Schaefer <eric@eyeem.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-deprecated-imports'),
  { RuleTester } = require('eslint'),
  path = require('path');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: path.join(process.cwd(), 'node_modules/babel-eslint/lib'),
});

ruleTester.run('no-deprecated-imports', rule, {
  valid: [
    "import { Something, Another, Header } from 'eyeem-components'",
    "import lib from 'eyeem-components'",
    "import { Text, Button } from 'another-library'",
  ],

  invalid: [
    {
      code: "import { Text, Another, Header } from 'eyeem-components'",
      errors: [
        {
          message:
            'Text component is deprecated. Refactor to use Text from @eyeem-ui instead.',
          type: 'Identifier',
        },
      ],
    },
    {
      code: "import { StyledText, Another, Header } from 'eyeem-components'",
      errors: [
        {
          message:
            'StyledText component is deprecated. Refactor to use Text from @eyeem-ui instead.',
          type: 'Identifier',
        },
      ],
    },
    {
      code: "import { Checkbox, Another, Header } from 'eyeem-components'",
      errors: [
        {
          message:
            'Checkbox component is deprecated. Refactor to use Checkbox from @eyeem-ui instead.',
          type: 'Identifier',
        },
      ],
    },
    {
      code: "import { Input, Another, Header } from 'eyeem-components'",
      errors: [
        {
          message:
            'Input component is deprecated. Refactor to use Input from @eyeem-ui instead.',
          type: 'Identifier',
        },
      ],
    },
  ],
});
