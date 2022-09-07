"use strict";

const { sum, minus, divide } = require("../calclibrary");

describe("Test sum with integers one by one", () => {
  test("test sum(1,1) returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("test sum(2,3) returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("Test sum with integers using test.each", () => {
  const testValues = [
    [2, -4, -2],
    [-4, 2, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
    [12, 100, 112],
  ];

  test.each(testValues)("sum(%s,%s) returns %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
});

describe("Test sum with floats", () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-2.5, -3, -5.5],
    [-2.5, -2.5, -5.0],
    [-2.5, 0, -2.5],
    [2.5, -2.5, 0],
    [2.4, -2.5, -0.1],
  ];

  test.each(testValues)("sum(%s,%s) returns %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBeCloseTo(expectedResult);
  });
});

describe("Test that missing parameters throw an exception", () => {
  test("sum() throws an exception 'parameter is missing'", () => {
    expect(() => sum()).toThrow("parameter missing");
  });

  const testValues = [[1], ["a"], [""]];

  test.each(testValues)(
    'sum(%s) throws an exception "parameter missing"',
    (ex) => {
      expect(() => sum(ex)).toThrow("parameter missing");
    }
  );
});

describe("Test that only numbers are allowed", () => {
  const testValues = [
    ['sum("1","2")', "1", "2"],
    ['sum("a",1)', "a", 1],
    ['sum(1,"a")', 1, "a"],
    ['sum("a","b")', "a", "b"],
    ['sum("","")', "", ""],
    ["sum(null,1)", null, 1],
    ["sum(undefined, 1)", undefined, 1],
  ];

  test.each(testValues)(
    "%s thorws an exception 'only numbers allowed'",
    (text, a, b) => {
      expect(() => sum(a, b)).toThrow("only numbers allowed");
    }
  );
});

describe("Test sum with integers using test.each", () => {
  const testValues = [
    [2, -4, -2],
    [-4, 2, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
    [12, 100, 112],
  ];

  test.each(testValues)("sum(%s,%s) returns %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
});

describe("Test sum with floats", () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-2.5, -3, -5.5],
    [-2.5, -2.5, -5.0],
    [-2.5, 0, -2.5],
    [2.5, -2.5, 0],
    [2.4, -2.5, -0.1],
  ];

  test.each(testValues)("sum(%s,%s) returns %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBeCloseTo(expectedResult);
  });
});

describe("Test that missing parameters throw an exception", () => {
  test("sum() throws an exception 'parameter is missing'", () => {
    expect(() => sum()).toThrow("parameter missing");
  });

  const testValues = [[1], ["a"], [""]];

  test.each(testValues)(
    'sum(%s) throws an exception "parameter missing"',
    (ex) => {
      expect(() => sum(ex)).toThrow("parameter missing");
    }
  );
});

describe("Test that only numbers are allowed", () => {
  const testValues = [
    ['sum("1","2")', "1", "2"],
    ['sum("a",1)', "a", 1],
    ['sum(1,"a")', 1, "a"],
    ['sum("a","b")', "a", "b"],
    ['sum("","")', "", ""],
    ["sum(null,1)", null, 1],
    ["sum(undefined, 1)", undefined, 1],
  ];

  test.each(testValues)(
    "%s thorws an exception 'only numbers allowed'",
    (text, a, b) => {
      expect(() => sum(a, b)).toThrow("only numbers allowed");
    }
  );
});

//##############
// Subtraction
//##############

describe("Test minus with integers one by one", () => {
  test("test minus(2,1) returns 1", () => {
    expect(minus(2, 1)).toBe(1);
  });
  test("test minus(5,3) returns 2", () => {
    expect(minus(5, 3)).toBe(2);
  });
});

describe("Testing integer values", () => {
  const testValues = [
    [1, 1, 0],
    [2, 3, -1],
    [-2, -4, 2],
    [0, 0, 0],
    [3, 0, 3],
    [0, 3, -3],
  ];
  test.each(testValues)("subtract(%s,%s)=%s", (a, b, expected) => {
    expect(minus(a, b)).toBe(expected);
  });
});

describe("Testing subtract with float values", () => {
  const testValues = [
    [10, 11.5, -1.5],
    [-2.5, 3, -5.5],
    [2.5, 2.5, 0],
    [2.4, -2.5, 4.9],
  ];
  test.each(testValues)("subtract(%s,%s)=%s", (a, b, expected) => {
    expect(minus(a, b)).toBe(expected);
  });
});

describe("Test that is missing parameters throw an exception", () => {
  test('minus() throws an exception "parameter missing"', () => {
    expect(() => minus()).toThrow("parameter missing");
  });

  const testValues = [
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];

  test.each(testValues)("minus(%s) throws an exception %s", (a, text) => {
    expect(() => minus(a)).toThrow(text);
  });
});

describe("Test that only numbers are allowed", () => {
  const testValues = [
    ['minus("1","2")', "1", "2"],
    ['minus("a",1)', "a", 1],
    ['minus(1,"a")', 1, "a"],
    ['minus("a","b")', "a", "b"],
    ['minus("","")', "", ""],
    ["minus(null,1)", null, 1],
    ["minus(undefined, 1)", undefined, 1],
  ];

  test.each(testValues)(
    "%s thorws an exception 'only numbers allowed'",
    (text, a, b) => {
      expect(() => minus(a, b)).toThrow("only numbers allowed");
    }
  );
});

//##############
// Division
//##############

describe("Testing division...", () => {
  const testValues = [
    [0, 0, Number.NaN],
    [2, 0, Number.POSITIVE_INFINITY],
    [-2, 0, Number.NEGATIVE_INFINITY],
  ];

  test.each(testValues)("divide(%s,%s)=%s", (a, b, expected) => {
    expect(divide(a, b)).toBe(expected);
  });
});
