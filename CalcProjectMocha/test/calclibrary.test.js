"use strict";

const expect = require("chai").expect;

const calculate = require("../calclibrary");

describe("Test if functions are defined", function () {
  it("sum is a function", function () {
    expect(calculate.sum).to.be.a("function");
  });

  it("sum(1,1)=2", function () {
    expect(calculate.sum(1, 1)).to.equal(2);
  });
});

describe("test sum with integer test cases", function () {
  const testcases = [
    { a: 1, b: 1, expected: 2 },
    { a: 2, b: 3, expected: 5 },
    { a: -2, b: -4, expected: -6 },
    { a: 0, b: 0, expected: 0 },
  ];

  testcases.forEach(function (testCase) {
    it(`sum(${testCase.a}, ${testCase.b})=${testCase.expected}`, function () {
      expect(calculate.sum(testCase.a, testCase.b)).to.equal(testCase.expected);
    });
  });
});

describe("test sum with integer test cases V2", function () {
  const testcases = [
    [1, 1, 2],
    [2, 3, 5],
    [-2, -4, -6],
    [0, 0, 0],
  ];

  testcases.forEach(function (testCase) {
    it(`sum(${testCase[0]}, ${testCase[1]})=${testCase[2]}`, function () {
      expect(calculate.sum(testCase[0], testCase[1])).to.equal(testCase[2]);
    });
  });
});

describe("test sum with floats", function () {
  const testCases = [
    { a: 10, b: 11.5, expected: 21.5 },
    { a: 2.5, b: 3, expected: 5.5 },
    { a: -2.5, b: 3, expected: 0.5 },
    { a: 2.4, b: -2.5, expected: -0.1 },
  ];

  testCases.forEach(function (tc) {
    it(`sum(${tc.a}, ${tc.b}) = ${tc.expected}`, function () {
      expect(calculate.sum(tc.a, tc.b)).to.be.closeTo(tc.expected, 0.01);
    });
  });
});

describe("Missing parameters", function () {
  it('sum(1) throws an exception "missing parameter"', function () {
    expect(function () {
      calculate.sum(1);
    }).to.throw("parameter missing");
  });
});

describe("testing only numbers allowed", function () {
  it('sum("1","2") throws an exception', function () {
    expect(function () {
      calculate.sum("1", "2");
    }).to.throw("only numbers allowed");
  });
});

describe("testing subtract", function () {
  it("minus(1,2)=-1", function () {
    expect(calculate.minus(1, 2)).to.equal(-1);
  });

  it("minus(2.4,2.5)=-0.1", function () {
    expect(calculate.minus(2.4, 2.5)).to.be.closeTo(-0.1, 0.01);
  });
});
