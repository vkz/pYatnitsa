var ometajs = require("ometajs"),
    Expressions = require("./Expr.ometajs"),
    parse = Expressions.ExpParser,
    evaluate = Expressions.ExpEvaluator,
    translate = Expressions.ExpTranslator,
    ast = parse.matchAll('5+6*10', 'exp'),
    val = evaluate.matchAll([ast], 'eval'),
    exp = translate.matchAll([ast], 'trans');

ast;
val;
exp;
