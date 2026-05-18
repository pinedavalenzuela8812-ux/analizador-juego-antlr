import antlr4 from "antlr4";
import fs from "fs";

import JuegoInterpreter from './JuegoInterpreter.js';
import MiniJSLexer from "./generated/MiniJSLexer.js";
import MiniJSParser from "./generated/MiniJSParser.js";
import MiniJSInterpreter from "./MiniJSInterpreter.js";

const input = fs.readFileSync("input.js", "utf8");

const chars = new antlr4.InputStream(input);
const lexer = new MiniJSLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

tokens.fill();

console.log("TABLA DE TOKENS");
console.log("----------------");

for (const token of tokens.tokens) {
    if (token && token.text) {
        console.log(token.text);
    }
}

tokens.seek(0);

const parser = new MiniJSParser(tokens);
parser.buildParseTrees = true;

const tree = parser.programa();

const interpreter = new JuegoInterpreter();

const jsCode = interpreter.visit(tree);

console.log("\nTRADUCCIÓN A JAVASCRIPT");
console.log("-----------------------");

console.log(jsCode);