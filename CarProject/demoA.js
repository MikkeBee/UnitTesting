"use strict";

// const carStorageNoFileRead = require("./carStorageNoFileRead");
// const search = require("./carStorageNoFileRead");
const search = require("./carStorageFilePromises");

console.log(search());
console.log("one");
console.log(search("model", "Nova"));
console.log("two");
console.log(search("license", "ABC-1"));
console.log("three");
