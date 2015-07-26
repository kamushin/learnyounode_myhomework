var fs = require("fs")
var filepath = process.argv[2]
var buffer = fs.readFileSync(filepath)
console.log(buffer.toString().split('\n').length - 1)
