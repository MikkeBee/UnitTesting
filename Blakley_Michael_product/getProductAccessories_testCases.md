# Test for get_product_accessories(searchKey)

### get_product_accessories(searchKey)

Returns an array of product accessories. If none found, returns an empty array. Returns in form:

```json
{
  "accessories": [""]
}
```

If no products are found, it is empty, or searchKey is missing, an empty array is returned.

## Test 1: No accessories

```js
const register = new ProductRegister([]);

register.getAllAccessories();
```

returns []

## Test 2a: using default data for ID 1

```js
const register = new ProductRegister([]);

register.getAllAccessories(1);
```

returns

```json
[
  {
    "accessories": ["coffee cup", "bags", "filter set"]
  }
]
```

## Test 2b: using default data for ID 2

returns

```json
[
  {
    "accessories": ["coffee cup", "bags", "cleaning brush"]
  }
]
```

## Test 3: searchKey missing

returns []
