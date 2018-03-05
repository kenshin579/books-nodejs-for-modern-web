//module.js이 없으면 module 폴더에서 index.js 파일을 찾아 추출함
var module = require('./module');

console.log("module: ", module.getName("frank"));