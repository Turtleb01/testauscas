const { recursiveArrayExec } = require("./utils.js");

function parseParentheses(str) {
  let level = 0;   //level of nested parentheses, for detecting missing parenthesis
  let output = [];
  let previousDepth=[];
  let currentDepth = output;
  let startPoint = 0;
  let i;
  for(i=0;i<str.length;i++) {
    switch(str[i]) {
      case "(":
        level++;
        if(startPoint!==i) {
          currentDepth.push(str.slice(startPoint,i));
        }
        previousDepth.push(currentDepth);
        currentDepth=currentDepth[currentDepth.push([])-1]; //this is evil
        startPoint=i+1;
        break;
      case ")":
        level--;
        if(level<0) {
          throw("Missing opening parenthesis");
        }
        if(startPoint!==i) {
          currentDepth.push(str.slice(startPoint,i));
        }
        currentDepth=previousDepth.pop();
        startPoint=i+1;
        break;
      default:

    }
  }
  if(startPoint!==i) {
    currentDepth.push(str.slice(startPoint,i));
  }
  if(level>0) {
    throw("Missing closing parenthesis");
  }
  return(output);
}

function parseMathOrder(str) {
   //code when
}

function parseInput(str) {
  let expr;
  expr = parseParentheses(str);
//  recursiveArrayExec(expr,console.log);
  return(expr);
}

module.exports = {
  parse: parseInput
};
