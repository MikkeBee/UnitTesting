"use strict";

const search = require("./carStorageFileCallBack");

search(console.log);
console.log("### one ###");
search(console.log, "model", "Nova");
console.log("### two ###");
search((data) => console.log(data), "license", "ABC-1");
console.log("### three ###");
search(printData, "model", "");

function printData(data) {
  console.log("#####");
  console.log(data);
  console.log("#####");
}
