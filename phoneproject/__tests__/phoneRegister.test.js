"use strict";

const phones = require("../phones.json");
const PhoneRegister = require("../phoneRegister");

describe("Testing constructor", () => {
  test("Test that the missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });

  //   test("Just for an example. Create object with default data", () => {
  //     const register = new PhoneRegister(phones);
  //     expect(register.phoneData).toEqual(phones);
  //   });
});

describe("Testing getTypes", () => {
  test("Test 1: use default data", () => {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
  });

  test("Test 2: person has no phone", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
      },
    ];

    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual([]);
  });

  test("Test 3: no persons in phone register", () => {
    const register = new PhoneRegister([]);
    expect(register.getTypes()).toEqual([]);
  });

  test("Test 4: type is missing or is an empty string", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "", number: "12345678" },
          { type: "work", number: "87654321" },
          { type: "work", number: "05040302" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [
          { type: "home", number: "567890123" },
          { type: "mobile", number: "045678912" },
          { type: "work", number: "3214569" },
        ],
      },
      {
        firstname: "Mary",
        lastname: "Jones",
        phones: [
          { number: "3333333" },
          { type: "cell", number: "12398745" },
          { type: "work", number: "00112233" },
        ],
      },
    ];

    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(["work", "home", "mobile", "cell"]);
  });

  test("Test 5. Some phones are missing", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [],
      },
      {
        firstname: "Vera",
        lastname: "River",
        phones: [
          { type: "home", number: "6666666" },
          { type: "mobile", number: "12121212" },
        ],
      },
      {
        firstname: "Mary",
        lastname: "Smith",
      },
    ];

    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(["home", "mobile"]);
  });
});

describe("Testing getPersonsNumbersByType", () => {
  const register = new PhoneRegister(phones);

  test("Test 1: work numbers of Leila Hökki", () => {
    expect(register.getPersonsNumbersByType("Leila", "Hökki", "work")).toEqual([
      "87654321",
      "05040302",
    ]);
  });

  test("Test 2: mobile numbers of Matt River", () => {
    expect(register.getPersonsNumbersByType("Matt", "River", "mobile")).toEqual(
      ["045678912"]
    );
  });

  test("Test 2B: home number of Matt River", () => {
    expect(register.getPersonsNumbersByType("Matt", "River", "home")).toEqual([
      "567890123",
    ]);
  });

  describe("Test 3: Wrong type or name returns an empty array", () => {
    const testValues = [
      ["Matt", "River", "x"],
      ["Matt", "x", "mobile"],
      ["x", "River", "mobile"],
    ];

    test.each(testValues)(
      "firstname=%s, lastname=%s, type=%s returns []",
      (first, last, type) => {
        expect(register.getPersonsNumbersByType(first, last, type)).toEqual([]);
      }
    );
  });

  describe("Test 4: Missing parameter throws an exception", () => {
    test("one parameter missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt", "River")).toThrow(
        "missing parameter"
      );
    });

    test("two parameters missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt")).toThrow(
        "missing parameter"
      );
    });

    test("all parameters missing", () => {
      expect(() => register.getPersonsNumbersByType()).toThrow(
        "missing parameter"
      );
    });

    test("Test 5: If data is empty array (no persons found)", () => {
      const emptyRegister = new PhoneRegister([]);
      expect(
        emptyRegister.getPersonsNumbersByType("Matt", "River", "mobile")
      ).toEqual([]);
    });
  });
});

describe("Testing getAllNumbersByType", () => {
  const register = new PhoneRegister(phones);

  test("Test 1: get all work numbers using default data", () => {
    const expectedValue = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "87654321" },
      },
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "05040302" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "work", tel: "3214569" },
      },
    ];

    expect(register.getAllNumbersByType("work")).toEqual(expectedValue);
  });

  test("Test 2: get all mobile numbers using default data", () => {
    const expectedValue = [
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "mobile", tel: "045678912" },
      },
    ];

    expect(register.getAllNumbersByType("mobile")).toEqual(expectedValue);
  });

  test("Test 2B: get all home numbers using default data", () => {
    const expectedValue = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "home", tel: "12345678" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "home", tel: "567890123" },
      },
    ];

    expect(register.getAllNumbersByType("home")).toEqual(expectedValue);
  });

  test('Test 3: type "x" will return an empty array', () => {
    expect(register.getAllNumbersByType("x")).toEqual([]);
  });

  test("Test4: missing parameter throws an exception", () => {
    expect(() => register.getAllNumbersByType()).toThrow("missing parameter");
  });

  test("Test 5: Person has type corresponding number missing", () => {
    const testData = [
      {
        firstname: "Vera",
        lastname: "Jones",
        phones: [
          { type: "home", number: "" },
          { type: "home" },
          { type: "home", number: "12121212" },
        ],
      },
    ];

    const expectedResult = [
      {
        firstname: "Vera",
        lastname: "Jones",
        number: { type: "home", tel: "12121212" },
      },
    ];

    const testregister = new PhoneRegister(testData);
    expect(testregister.getAllNumbersByType("home")).toEqual(expectedResult);
  });
});

describe("Test cases for getAllNumbers", () => {
  test("Test 1: All persons are missing", () => {
    const register = new PhoneRegister([]);
    expect(register.getAllNumbers()).toEqual([]);
  });

  test("Test 2: using default data", () => {
    const register = new PhoneRegister(phones);
    expect(register.getAllNumbers()).toEqual(phones);
  });

  test("Test 3: some phones are missing", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "87654321" },
          { type: "work", number: "05040302" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [],
      },
      {
        firstname: "Vera",
        lastname: "River",
      },
    ];

    const expectedResult = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "87654321" },
          { type: "work", number: "05040302" },
        ],
      },
    ];
    const register = new PhoneRegister(testData);
    expect(register.getAllNumbers()).toEqual(expectedResult);
  });

  test("Test 4: All phones are missing", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [],
      },
      {
        firstname: "Vera",
        lastname: "River",
      },
    ];

    const register = new PhoneRegister(testData);
    expect(register.getAllNumbers()).toEqual([]);
  });
});

describe("Test case for getName", () => {
  const register = new PhoneRegister(phones);

  test("Test 1: Wrong number", () => {
    expect(register.getName("0000")).toBeNull();
  });

  test("Test 2: Parameter missing", () => {
    expect(register.getName()).toBeNull();
  });

  test("Test 3: Get the name of the number 12345678", () => {
    expect(register.getName("12345678")).toEqual({
      firstname: "Leila",
      lastname: "Hökki",
    });
  });

  describe("Test 3B: Get the name of the number", () => {
    const testValues = [
      ["87654321", { firstname: "Leila", lastname: "Hökki" }],
      ["05040302", { firstname: "Leila", lastname: "Hökki" }],
      ["045678912", { firstname: "Matt", lastname: "River" }],
    ];

    test.each(testValues)("number %s returns %p", (number, result) => {
      expect(register.getName(number)).toEqual(result);
    });
  });
});
