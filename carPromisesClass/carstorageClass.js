"use strict";

const fs = require("fs").promises;

module.exports = class Storage {
  constructor(storageFileName) {
    this.storageFileName = storageFileName;
  }

  find(key, value) {
    return new Promise(async (resolve, reject) => {
      try {
        if (key && value) {
          if (!["model", "license"].includes(key)) {
            reject("key not found");
          } else {
            const data = await fs.readFile(this.storageFileName, "utf-8");
            const cars = await JSON.parse(data);
            //const cars = await JSON.parse(await fs.readFile(this.storageFileName,'utf-8'))
            const found = [];
            for (let car of cars) {
              if (car[key] == value) {
                found.push(car);
              }
            }
            resolve(found);
          }
        } else {
          reject("parameter missing");
        }
      } catch (error) {
        reject("read error");
      }
    });
  }
};
