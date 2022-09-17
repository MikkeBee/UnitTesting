# Test for get_productionYear_of_product_by_productname(searchKey)

### get_productionYear_of_product_by_productname(searchKey)

Returns the productionYear of product matching the searchKey productname or null if no match is found. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Test 1: No product match

```js
const register = new ProductRegister();

register.getProductionYear(x);
```

returns `null`

## Test 2: Searchkey missing

```js
const register = new ProductRegister();

register.getProductionYear();
```

returns `'missing parameter''`

## Test 3: Test for ID 2

```js
const register = new ProductRegister();

register.getProductionYear(2);
```

returns 2017
