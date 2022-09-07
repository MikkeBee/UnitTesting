"use strict";

beforeAll(() => {
  console.log("BEFORE_ALL", "init before all tests");
});

afterAll(() => {
  console.log("AFTER_ALL", "cleaning after all tests");
});

test("This is the first test", () => {
  console.log("first test");
});

it("This is the second test", () => {
  console.log("second test");
});

describe("This is test suite A", () => {
  beforeEach(() => {
    console.log("beforeEach", "Run before each test in suite A");
  });

  afterEach(() => {
    console.log("afterEach", "Run after each test in suite A");
  });

  test("first test in suite A", () => {
    console.log("first in suite A");
  });

  test("second test in suite A", () => {
    console.log("second in suite A");
  });
});

describe("This is test suite B", () => {
  beforeAll(() => {
    console.log("BeforeAllInSuiteB");
  });

  describe("this is a subsuite of B", () => {
    test("First test of subsuite A of B", () => {
      console.log("Subsuite A of B");
    });

    test("Second test of subsuite A of B", () => {
      console.log("Subsuite A of B");
    });
  });

  describe("subsuite B of B", () => {
    test("first of B of B", () => {
      console.log("first test of B of B");
    });
  });
});

describe("Test concatenating strings", () => {
  const concat = (partA, partB) => partA + partB;

  test("first and second resulsts firstsecond", () => {
    //expect = function to execute, .toBe = expected results
    expect(concat("first", "second")).toBe("firstsecond");
  });

  test('1 and 2 resulsts "12"', () => {
    expect(concat("1", "2")).toBe("12");
  });
});

describe("this tests for an exception", () => {
  function testFunction() {
    throw Error("this is an exception");
  }
  test("tests if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("this is an exception");
  });
});
