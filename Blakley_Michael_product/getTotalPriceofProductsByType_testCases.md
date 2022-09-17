# Test for get_total_price_of_products_by_types(searchValue)

### get_total_price_of_products_by_types(searchValue)

Returns the total price of all products that have the same type than the given searchValue. If no product with the given searchValue is found, it throws an exception `'nothing found matching the search parameter'`. If the searchValue is missing, an exception `'missing parameter'` is thrown.

## Test 1: No searchValue

```js
const register = new ProductRegister([]);

register.getTotalPriceByType();
```

returns `'missing parameter'`

## Test 2: No product matching the given searchValue

```js
const register = new ProductRegister([]);

register.getTotalPriceByType();
```

returns `'Nothing found matching the search parameter'`

## Test 3: Price of one product

```js
const register = new ProductRegister([]);

register.getTotalPriceByType("phone");
```

returns 300

## Test 4: Price of more than one product

```js
const register = new ProductRegister([]);

register.getTotalPriceByType("phone", "stereo");
```

returns 336
\*\*need to check how to get multiple types and add the total
