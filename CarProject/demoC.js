"use strict";

const search = require("./carStorageFileCallBackV2");

try {
  search("model", "Nova", console.log);
} catch (err) {
  console.log(err.message);
}

search("license", "ABC-1", console.log);
