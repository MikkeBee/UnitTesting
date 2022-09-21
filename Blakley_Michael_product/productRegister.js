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
  }

  getTotalPriceByType(type) {
    if (!type) throw new Error("Missing parameter");
    const productTypes = this.productData.filter((item) => item.type === type);
    if (productTypes.length === 0) {
      throw new Error("Nothing found matching the search parameter");
    } else {
      const total = productTypes.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );

      return total;
    }
  }

  getProductionYear(productName) {
    const itemName = this.productData.find(
      (item) => item.productname === productName
    );
    if (!productName) {
      throw new Error(`Missing parameter`);
    } else if (!itemName) {
      return null;
    } else {
      return itemName.productionYear;
    }
  }
};
