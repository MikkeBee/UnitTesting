"use strict";

const search = require("./carStorageFilePromises");

// search().then(console.log).catch(console.log);
// search("model", "GTX")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// function print(dataArray) {
//   for (let car of dataArray) {
//     console.log(car.license);
//   }
// }

// function print(dataArray) {
//   for (let car of dataArray) {
//     console.log(car.licence);
//   }
// }

// (async () => {
//     try {
//         console.log(await search());
//         console.log('### one ###');
//         const result = await search('model', 'GTX');
//         console.log(result);
//         console.log('### two ###');
//         console.log(await search('license', 'ABC-1'));
//         console.log('### three ###');
//     }
//     catch (err) {
//         console.log('Sorry!' + err);

//     }
// })

async function run() {
  try {
    const result = await search();
    console.log(result);
    for (let car of result) {
      console.log(car.model.toUpperCase());
    }
    const licenseResult = await search("license", "ABC-1");
    if (licenseResult.length > 0) {
      console.log(licenseResult[0].model);
    } else {
      console.log("no cars found");
    }
  } catch (err) {
    console.log(err);
  }
}

run();
