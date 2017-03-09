module.exports = {
  rules: {
    'only-var': {
      meta: {
        fixable: "code",
      },
      create(context) {
        const sourceCode = context.getSourceCode();
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