const path = require('path');

module.exports = {
  rules: {
    'only-var': {
      meta: {
        fixable: "code",
      },
      create(context) {
        const sourceCode = context.getSourceCode();
        const ignore = context.options.length > 0 ? context.options[0].ignore || [] : [];
        const extension = path.extname(context.getFilename());
        if (ignore.indexOf(extension) > -1) { return {}; }
        return {
          VariableDeclaration(node) {
            if (node.kind !== 'var') {
              context.report({
                message: 'You cannot use {{ kind }} - try var.',
                node: node,
                data: {
                  kind: node.kind,
                },
                fix(fixer) {
                  return fixer.replaceText(sourceCode.getFirstToken(node), 'var');
                }
              })
            }
          }
        }
      }
    }
  }
}