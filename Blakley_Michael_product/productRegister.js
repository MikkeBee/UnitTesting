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
    const rightProduct = this.productData.find((item) => item.ID === id);
    if (!rightProduct) {
      return null;
    } else {
      return rightProduct.extras;
    }
  }

  hasExtras(id) {
    const rightProduct = this.productData.find((item) => item.ID === id);
    if (
      !rightProduct ||
      !rightProduct.extras ||
      Object.keys(rightProduct.extras).length === 0
    ) {
      return false;
    } else {
      return true;
    }
  } //Needs reworking as it does not allow use of testData

  getTotalPriceByType(type) {
    const productType = this.productData.find((item) => item.type === type);
    if (type === undefined) {
      return `Missing parameter`;
    } else if (!productType) {
      return `'Nothing found matching the search parameter'`;
    } else {
      return productType.price;
    }
  }

  getProductionYear(productName) {
    const itemName = this.productData.find(
      (item) => item.productname === productName
    );
    if (!productName) {
      return `Missing parameter`;
    } else if (!itemName) {
      return null;
    } else {
      return itemName.productionYear;
    }
  }
};
