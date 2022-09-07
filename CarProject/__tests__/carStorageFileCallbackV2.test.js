"use strict";

const search = require("../carStorageFileCallBackV2");

describe("testing callback", () => {
  test("search with licence ABC-1", () => {
    function cb(data) {
      //cb = callback function
      try {
        expect(data).toEqual([
          {
            model: "Bored T-Model",
            license: "ABC-1",
          },
        ]);
        done();
      } catch (error) {
        done(error);
      }
    } //end of cb

    search("license", "ABC-1", cb);
  });
});

describe("testing the missing callback", () => {
  test("callback missing throws an exception", () => {
    expect(() => search("licence", "ABC-1")).toThrow(
      "callback function missing"
    );
  });
});
