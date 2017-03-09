var RuleTester = require('eslint').RuleTester;
var rule = require('./').rules['only-var'];

var ruleTester = new RuleTester();
ruleTester.run("only-var", rule, {
  valid: [
    'var myVar = 1',
    'var fn = function() {}'
  ],
  invalid: [{
    code: 'const t = 1, y = \'some very long string\'',
    parserOptions: { ecmaVersion: 6 },
    errors: [{ message: 'You cannot use const - try var.' }],
    output: 'var t = 1, y = \'some very long string\''
  }, {
    code: 'let t = 1',
    parserOptions: { ecmaVersion: 6 },
    errors: [{ message: 'You cannot use let - try var.' }],
    output: 'var t = 1'
  }, {
    code: 'const x = 1; const y = 2;',
    parserOptions: { ecmaVersion: 6 },
    errors: [{ message: 'You cannot use const - try var.' }, { message: 'You cannot use const - try var.' }],
    output: 'var x = 1; var y = 2;'
  }]
})