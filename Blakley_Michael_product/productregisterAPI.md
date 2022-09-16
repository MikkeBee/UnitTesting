# ProductRegister API

## Constructor

### **constructor(jsondata)**

Initializes ProductRegister object

Parameters:
The data storage json object is passed as a parameter to the constructor.

Returns:

Throws:
If the parameter is missing, constructor throws an error `'data storage missing'`

## Methods

### **get_product_accessories(searchKey)**

Returns an array of product accessories. If none found, returns an empty array.

Parameters:
searchKey is the ID of the product

Returns:
accessories of the product as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

Throws:

### **get_extras(searchKey)**

searches the product matching the searchKey and if match is found returns the extras object otherwise null is returned

Parameters:
searchKey is the ID of the product

Returns:
returns the extras object of the product matching the searchKey. If no product matching the given searchKey is found or searchKey is missing, null will be returned

Throws:

### **has_extras(searchKey)**

Method checks based on ID if the product has `extras` or not.

Parameters:
searchKey is the ID to be searched

Returns:
Returns true if the product matching the searchKey has `extras` array and it is not an empty array else returns false. If parameter searchKey is missing false is returned

Throws:

### **get_total_price_of_products_by_type(searchValue)**

returns the total price of all cars that have the same type than the given searchValue

Parameters:
searchValue is the type of the product to be searched

Returns:
total cumulative price of products matching the searchValue

Throws:
if no product with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_productionYear_of_product_by_productname(searchKey)**

returns the productionYear of the product matching the productname

Parameters:
searchKey is the productname of the product

Returns:
returns the productionYear of product matching the searchKey productname or null if no match is found

Throws:
If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown
