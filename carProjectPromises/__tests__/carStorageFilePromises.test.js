"use strict";

const search = require("../carStorageFilePromises");

describe("Testing with key license to resolve", () => {
  const expectedResults = [
    {
      model: "Bored T-Model",
      license: "ABC-1",
    },
  ];

  //Only one of the four below is enough. These are just different ways of writing the same test.
  test("then", () => {
    return search("license", "ABC-1").then((data) =>
      expect(data).toEqual(expectedResults)
    );
  }); //Alternate option, next option below is basically the same.

  test("async-await", async () => {
    const data = await search("license", "ABC-1");
    expect(data).toEqual(expectedResults);
  });

  test("resolves", () => {
    return expect(search("license", "ABC-1")).resolves.toEqual(expectedResults);
  });

  test("resolves with async", async () => {
    await expect(search("license", "ABC-1")).resolves.toEqual(expectedResults);
  }); //same as above. If no async then must put return. If async then use await.
});

describe("testing with key license to reject", () => {
  test("catch", () => {
    return search().catch((err) => expect(err).toBe("parameter missing"));
  });

  test("async-await", async () => {
    try {
      await search();
    } catch (err) {
      expect(err).toBe("parameter missing");
    }
  });

  test("rejects", () => {
    return expect(search()).rejects.toBe("parameter missing");
  });

  test("rejects with async", async () => {
    await expect(search()).rejects.toBe("parameter missing");
  }); //The one above and this are the easier ways to write the test for this describe
});

describe("test with key model", () => {
  const resultForT = [
    {
      model: "Bored T-Model",
      license: "ABC-1",
    },
    {
      model: "Bored T-Model",
      license: "GTF-10",
    },
  ];

  const resultForNova = [
    {
      model: "Nova",
      license: "XYZ-123",
    },
  ];

  test("search model Bored T-Model", () => {
    return expect(search("model", "Bored T-Model")).resolves.toEqual(
      resultForT
    );
  });

  test("search model Bored T-Model", async () => {
    await expect(search("model", "Bored T-Model")).resolves.toEqual(resultForT);
  }); //Same as above test but again using async + await instead of return

  test("search model Nova", () => {
    return expect(search("model", "Nova")).resolves.toEqual(resultForNova);
  });

  test("search model X", () => {
    return expect(search("model", "X")).resolves.toEqual([]);
  });

  test("search with only one parameter", () => {
    return expect(search("model")).rejects.toBe("parameter missing");
  });
});
