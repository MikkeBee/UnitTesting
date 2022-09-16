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

// getPersonsNumbersByType() {
//     if (firstname && lastname && type) {
//       const numbersFound = [];
//       for (let person of this.phoneData) {
//         if (person.firstname === firstname && person.lastname === lastname) {
//           for (let phone of person.phones) {
//             if (phone.type === type) {
//               numbersFound.push(phone.number);
//             }
//           }
//           return numbersFound;
//         }
//       }
//       return numbersFound;
//     } else {
//       throw new Error("missing parameter");
//     }
//   }

//   getPersonsNumbersByType(firstname, lastname, type) {
//     if (firstname && lastname && type) {
//       const numbersFound = [];
//       for (let person of this.phoneData) {
//         if (person.firstname === firstname && person.lastname === lastname) {
//           for (let phone of person.phones) {
//             if (phone.type === type) {
//               numbersFound.push(phone.number);
//             }
//           }
//           return numbersFound;
//         }
//       }
//       return numbersFound;
//     } else {
//       throw new Error("missing parameter");
//     }
//   }

//   getAllNumbersByType(type) {
//     if (!type) throw new Error("missing parameter");

//     const found = [];
//     for (let person of this.phoneData) {
//       if (person.phones) {
//         for (let phone of person.phones) {
//           if (phone.type === type) {
//             if (phone.number && phone.number.length > 0) {
//               const newPhone = {
//                 firstname: person.firstname,
//                 lastname: person.lastname,
//                 number: {
//                   type: phone.type,
//                   tel: phone.number,
//                 },
//               };
//               found.push(newPhone);
//             }
//           }
//         }
//       }
//     }
//     return found;
//   }

//   getAllNumbers() {
//     const found = [];
//     for (let person of this.phoneData) {
//       if (person.phones && person.phones.length > 0) {
//         found.push(person);
//       }
//     }
//     return found;
//   }

//   getName(number) {
//     for (let person of this.phoneData) {
//       for (let phone of person.phones) {
//         if (phone.number === number) {
//           return {
//             firstname: person.firstname,
//             lastname: person.lastname,
//           };
//         }
//       }
//     }
//     return null;
//   }
//
