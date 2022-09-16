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

  test("Test 2a: using default data for ID 1", () => {
    const register = new ProductRegister(products);
    expect(register.getAllAccessories(1)).toEqual([
      "coffee cup",
      "bags",
      "filter set",
    ]);
  });

  test("Test 2b: using default data for ID 2", () => {
    const register = new ProductRegister(products);
    expect(register.getAllAccessories(2)).toEqual([
      "coffee cup",
      "bags",
      "cleaning brush",
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

  test("Test 3: test for ID 1", () => {
    const register = new ProductRegister(products);
    expect(register.getExtras(1)).toEqual({
      model: "chrome",
      comments: "high capacity",
      energyclass: "A+",
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
    const testData = {
      ID: 2,
      productname: "MaxEffect 2000",
      type: "stereo",
      price: 36,
      productionYear: 2017,
      accessories: ["coffee cup", "bags", "cleaning brush"],
      extras: {},
    };
    const register = new ProductRegister(products);
    expect(register.hasExtras(testData.ID)).toEqual(false);
  });

  test("Test 4: Product has extras", () => {
    const register = new ProductRegister(products);
    expect(register.hasExtras(1)).toEqual(true);
  });
});
