# Test for has_extras(searchKey)

### has_extras(searchKey)

Method checks based on ID if the product has `extras` or not.

If no product matching the given searchKey is found or searchKey is missing, null will be returned.

## Test 1: No searchKey

```js
const register = new ProductRegister();

register.hasExtras();
```

returns false

## Test 2: Extras are missing

```js
const register = new ProductRegister();

register.hasExtras(5);
```

returns false

## Test 3: Product has an empty extras object

```js
const register = new ProductRegister();

register.hasExtras(5);
```

```json
{
  "ID": 2,
  "productname": "MaxEffect 2000",
  "type": "stereo",
  "price": 36,
  "productionYear": 2017,
  "accessories": ["coffee cup", "bags", "cleaning brush"],
  "extras": {}
}
```

return false

## Test 4: Product has extras

```js
const register = new ProductRegister();

register.hasExtras(1);
```

returns true
