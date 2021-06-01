import babel from '@babel/core';

const code = `
function greet(name) {
    var log = 'log';
    var console = 'console';
    return 'Hello ' + name + console + '.' + log;
  }
  
  console.log(greet('tanhauhau')); // Hello tanhauhau
  `;

const output = babel.transformSync(code, {
  plugins: [
    // your first babel plugin 😎😎
    function myCustomPlugin() {
      return {
        visitor: {
            Identifier(path) {
                if (!(
                    path.parentPath.isMemberExpression() && 
                    path.parentPath.get('object').isIdentifier({name: 'console'}) && 
                    path.parentPath.get('property').isIdentifier({name: 'log'})
                    )) {
                        path.node.name = path.node.name
                        .split('')
                        .reverse()
                        .join('');
                }
            },
            StringLiteral(path) {
                const newNode = path.node.value
                    .split('')
                    .map(c => babel.types.stringLiteral(c))
                    .reduce((prev, curr) => {
                    return babel.types.binaryExpression('+', prev, curr);
                    });
                path.replaceWith(newNode);
                path.skip();
            },
        },
      };
    },
  ],
});

console.log(output.code); // 'const x = 1;'