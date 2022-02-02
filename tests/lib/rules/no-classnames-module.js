/**
 * @fileoverview Encourages EyeEm refactoring goals!
 * @author Eric Schaefer <eric@eyeem.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-classnames-module'),
  { RuleTester } = require('eslint'),
  path = require('path');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: path.join(process.cwd(), 'node_modules/@babel/eslint-parser')
});

ruleTester.run('no-classnames-module', rule, {
  valid: ["import something from 'something'"],

  invalid: [
    {
      code: "import classnames from 'classnames'",
      errors: [
        {
          message:
            'classnames is deprecated for us! Refactor this component to not use old CSS stylesheets.',
          type: 'ImportDeclaration'
        }
      ]
    }
  ]
});
