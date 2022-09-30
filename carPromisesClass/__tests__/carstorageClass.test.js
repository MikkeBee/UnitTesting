"use strict";

const Storage = require("../carstorageClass");

describe("testing class with cars.json", () => {
  const carStorage = new Storage("./cars.json");

  test("test find with license ABC-1", () => {
    const expectedResult = [
      {
        model: "Bored T-Model",
        license: "ABC-1",
      },
    ];
    return expect(carStorage.find("license", "ABC-1")).resolves.toEqual(
      expectedResult
    );
  });

  test("test find with wrong key", () => {
    return expect(carStorage.find("color", "blue")).rejects.toBe(
      "key not found"
    );
  });

  test("test missing parameter", () => {
    return expect(carStorage.find("model")).rejects.toBe("parameter missing");
  });

  test("test model with Bored T-model", () => {
    return expect(carStorage.find("model", "Bored T-Model")).resolves.toEqual([
      {
        model: "Bored T-Model",
        license: "ABC-1",
      },
      {
        model: "Bored T-Model",
        license: "GTF-10",
      },
    ]);
  });
});

describe("wrong filename", () => {
  test("testing with file x.json", () => {
    const storage = new Storage("./x.json");
    return expect(storage.find("license", "ABC-1")).rejects.toBe("read error");
  });
});
