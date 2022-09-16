# Test for get_total_price_of_products_by_types(searchValue)

### get_total_price_of_products_by_types(searchValue)

Returns the total price of all cars that have the same type than the given searchValue. If no product with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Test 1: No searchValue

```js
const register = new ProductRegister([]);

register.getTotalPriceByType();
```

returns `'missing parameter'`

## Test 2: No product matching the given searchValue

```js
const register = new ProductRegister([]);

register.hasExtras(x);
```

returns `'Nothing found with given parameter'`

## Test 3: Product has extras

```js
const register = new ProductRegister([]);

register.hasExtras(1);
```

returns true
