"use strict";

const products = require("../datastorage.json");
const ProductRegister = require("../productRegister");

describe("Testing constructor", () => {
  test("Test that the missing parameter throws an exception", () => {
    expect(() => new ProductRegister()).toThrow("data storage missing");
  });
});

describe("Testing getProductAccessories", () => {
  test("Test 1: No accessories", () => {
    const testData = [
      {
        ID: 1,
        productname: "Tako delux",
        type: "phone",
        price: 300,
        productionYear: 2011,
        accessories: "",
        extras: {
          model: "chrome",
          comments: "high capacity",
          energyclass: "A+",
        },
      },
    ];

    const register = new ProductRegister(testData);
    expect(register.getAllAccessories()).toEqual([]);
  });

  test("Test 2a: using default data for ID 2", () => {
    const register = new ProductRegister(products);
    expect(register.getAllAccessories(2)).toEqual([
      "coffee cup",
      "bags",
      "cleaning brush",
    ]);
  });

  test("Test 2b: using default data for ID 3", () => {
    const register = new ProductRegister(products);
    expect(register.getAllAccessories(3)).toEqual([
      "delux brush set",
      "coffee cup",
      "filter set",
    ]);
  });

  test("Test 3: searchKey is missing", () => {
    const register = new ProductRegister(products);
    expect(register.getAllAccessories()).toEqual([]);
  });
});

describe("Testing getExtras", () => {
  test("Test 1: No product match", () => {
    const register = new ProductRegister(products);
    expect(register.getExtras(6)).toEqual(null);
  });

  test("Test 2: searchKey missing", () => {
    const register = new ProductRegister(products);
    expect(register.getExtras()).toEqual(null);
  });

  test("Test 3: test for ID 2", () => {
    const register = new ProductRegister(products);
    expect(register.getExtras(2)).toEqual({
      model: "XXL",
      comments: "high capacity",
      energyclass: "A++",
    });
  });
});

describe("Testing hasExtras", () => {
  test("Test 1: No searchKey", () => {
    const register = new ProductRegister(products);
    expect(register.hasExtras()).toEqual(false);
  });

  test("Test 2: Extras are missing", () => {
    const register = new ProductRegister(products);
    expect(register.hasExtras(5)).toEqual(false);
  });

  test("Test 3: Product has an empty extras object", () => {
    const testData = [
      {
        ID: 6,
        productname: "MaxEffect 2000",
        type: "stereo",
        price: 36,
        productionYear: 2017,
        accessories: ["coffee cup", "bags", "cleaning brush"],
        extras: {},
      },
    ];
    const register = new ProductRegister(testData);
    expect(register.hasExtras(6)).toEqual(false);
  });

  test("Test 4: Product has extras", () => {
    const register = new ProductRegister(products);
    expect(register.hasExtras(3)).toEqual(true);
  });
});

describe("Test case for getTotalPriceByType", () => {
  test("Test 1: No searchValue", () => {
    const register = new ProductRegister(products);
    expect(() => register.getTotalPriceByType()).toThrow("Missing parameter");
  });

  test("Test 2: No product matching the given searchValue", () => {
    const register = new ProductRegister(products);
    expect(() => register.getTotalPriceByType("book")).toThrow(
      "Nothing found matching the search parameter"
    );
  });

  test("Test 3: Price of one product", () => {
    const register = new ProductRegister(products);
    expect(register.getTotalPriceByType("tv")).toEqual(36);
  });

  test("Test 4: Price of two products", () => {
    const testData = [
      {
        ID: 1,
        productname: "Tako delux",
        type: "phone",
        price: 300,
        productionYear: 2011,
      },
      {
        ID: 6,
        productname: "Tako",
        type: "phone",
        price: 600,
        productionYear: 2012,
      },
    ];
    const register = new ProductRegister(testData);
    expect(register.getTotalPriceByType("phone")).toEqual(900);
  });
});

describe("Test case for getProductionYear", () => {
  test("Test 1: No searchValue", () => {
    const register = new ProductRegister(products);
    expect(() => register.getProductionYear()).toThrow(`Missing parameter`);
  });

  test("Test 2: No product matching the given searchValue", () => {
    const register = new ProductRegister(products);
    expect(register.getProductionYear("MaxEffect 1000")).toEqual(null);
  });

  test("Test 3: Production year for item 2", () => {
    const register = new ProductRegister(products);
    expect(register.getProductionYear("MaxEffect 2000")).toEqual(2017);
  });
});
