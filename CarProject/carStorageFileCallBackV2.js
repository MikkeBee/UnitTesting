"use strict";

const fs = require("fs");

const storageFilePath = "./cars.json";

// cbf is a callback function
module.exports = (key, value, cbf) => {
  if (typeof cbf !== "function") {
    throw new Error("callback function missing");
  } //If cbf at end of parameters
  fs.readFile(storageFilePath, "utf8", (err, data) => {
    if (err) {
      cbf(err);
    } else {
      let found = [];
      const cars = JSON.parse(data);
      if (key && value) {
        for (let car of cars) {
          if (car[key] === value) {
            found.push(car);
          }
        }
      } else {
        found = cars;
      }
      cbf(found);
    }
  });
};
