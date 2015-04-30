var ometajs = require("ometajs"),
    grammars = require("./Expr.ometajs"),
    input = '5+6*10',
    ast,
    val,
    expression;

ast = grammars.PARSER.matchAll(input, 'exp');
val = grammars.EVALUATOR.matchAll([ast], 'eval');
expression = grammars.TRANSLATOR.matchAll([ast], 'trans');
