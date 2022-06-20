const repl = require("node:repl");
const { parse } = require("./parser.js");

async function inputEval(input, context, file, callback)  {
  //newline is an expression separator
  input = input.replace(/\n/g,";");
  //spaces are completely reduntant, let's just get rid of them
  input = input.replace(/ /g,"");

  //expressions are separated by semicolons
  //semicolon at the end of the input is optional
  input.split(";").forEach((expr)=>{
    if(expr.length>0) {
      try {
        console.log(parse(expr));
      } catch(err) {
        console.error(`Error while executing command "${expr}":\n${err}`);
        callback(null);
      }
    }
  });
  callback(null);
}

function inputCompleter(input) {
  //TODO: code
  return [[input],input];
}

repl.start({
  prompt: "> ",
  completer: inputCompleter,
  eval: inputEval,
});

