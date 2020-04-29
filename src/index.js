const { parse } = require("melody-parser");
const { readFileSync } = require("fs");
const { extension } = require("melody-extension-core");

const code = readFileSync("./test/a.html.twig", "utf-8");
// const code = "{% spaceless %} This is some Twig code {% endspaceless %}";
const abstractSyntaxTree = parse(code, extension);

console.log(abstractSyntaxTree);
