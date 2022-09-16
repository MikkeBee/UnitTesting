"use strict";

module.exports = class ProductRegister {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.productData = data;
  }

  getAllAccessories(id) {
    const foundAccessories = [];
    for (let product of this.productData) {
      if (product.ID === id) {
        for (let accessories of product.accessories) {
          if (accessories && accessories !== "") {
            foundAccessories.push(accessories);
          }
        }
      }
    }
    return foundAccessories;
  }

  getExtras(id) {
    for (let product of this.productData) {
      if (product.ID === id) {
        return product.extras;
      } else {
        return null;
      }
    }
  }

  hasExtras(id) {
    for (let product of this.productData) {
      if (product.ID === id && Object.keys(product.extras).length !== 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
