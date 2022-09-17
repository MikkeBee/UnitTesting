Michael Blakley


# **End assignment** (product)


## Task: Create and test ProductRegister class
Create a class `ProductRegister` for product data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

```json
[
  {
    "ID": 1,
    "productname": "Tako delux",
    "type": "phone",
    "price": 300,
    "productionYear": 2011,
    "accessories": [
      "coffee cup",
      "bags",
      "filter set"
    ],
    "extras": {
      "model": "chrome",
      "comments": "high capacity",
      "energyclass": "A+"
    }
  },
  {
    "ID": 2,
    "productname": "MaxEffect 2000",
    "type": "stereo",
    "price": 36,
    "productionYear": 2017,
    "accessories": [
      "coffee cup",
      "bags",
      "cleaning brush"
    ],
    "extras": {
      "model": "XXL",
      "comments": "high capacity",
      "energyclass": "A++"
    }
  },
  {
    "ID": 3,
    "productname": "Beast II",
    "type": "toaster",
    "price": 123,
    "productionYear": 2015,
    "accessories": [
      "delux brush set",
      "coffee cup",
      "filter set"
    ],
    "extras": {
      "model": "gold",
      "comments": "old model",
      "energyclass": "A"
    }
  },
  {
    "ID": 4,
    "productname": "MaxEffect 2000",
    "type": "tv",
    "price": 36,
    "productionYear": 2018,
    "accessories": [
      "coffee cup",
      "filter set",
      "cleaning brush"
    ],
    "extras": {
      "model": "VIP",
      "comments": "no comments",
      "energyclass": "A+"
    }
  },
  {
    "ID": 5,
    "productname": "Beast II",
    "type": "monitor",
    "price": 15,
    "productionYear": 2012,
    "accessories": [
      "bags",
      "delux brush set",
      "cleaning brush"
    ]
  }
]
```


# ProductRegister API

## Constructor

### **constructor(jsondata)**
Initializes ProductRegister object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **get_product_accessories(searchKey)**
Returns an array of product accessories. If none found, returns an empty array.

>Parameters:
>>searchKey is the ID of the product

>Returns:
>>accessories of the product as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

>Throws:
>>

### **get_extras(searchKey)**
searches the product matching the searchKey and if match is found returns the extras object otherwise null is returned

>Parameters:
>>searchKey is the ID of the product

>Returns:
>>returns the extras object of the product matching the searchKey. If no product matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

### **has_extras(searchKey)**
Method checks based on ID if the product has `extras` or not.

>Parameters:
>>searchKey is the ID to be searched

>Returns:
>>Returns true if the product matching the searchKey has `extras` array and it is not an empty array else returns false. If parameter searchKey is missing false is returned

>Throws:
>>

### **get_total_price_of_products_by_type(searchValue)**
returns the total price of all cars that have the same type than the given searchValue

>Parameters:
>>searchValue is the type of the product to be searched

>Returns:
>>total cumulative price of products matching the searchValue

>Throws:
>>if no product with the given searchValue is  found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_productionYear_of_product_by_productname(searchKey)**
returns the productionYear of the product matching the productname

>Parameters:
>>searchKey is the productname of the product

>Returns:
>>returns the productionYear of product matching the searchKey productname or null if no match is found

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

# The project

## Create a folder for the testproject
- the name of the folder should be `Blakley_Michael_product`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file