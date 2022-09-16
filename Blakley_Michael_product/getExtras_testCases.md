# Test for get_extras(searchKey)

### get_extras(searchKey)

Searches the product matching the searchKey and if match is found returns the extras object otherwise null is returned

```json
{
 { "model": "", "comments": "", "energyclass": "" }
}
```

If no product matching the given searchKey is found or searchKey is missing, null will be returned.

## Test 1: No product match

```js
const register = new ProductRegister();

register.getExtras(x);
```

returns `null`

## Test 2: Searchkey missing

```js
const register = new ProductRegister();

register.getExtras();
```

returns `null`

## Test 3: Test for ID 1

```js
const register = new ProductRegister();

register.getExtras(1);
```

returns

```json
[
  "extras" {
      "model": "chrome",
      "comments": "high capacity",
      "energyclass": "A+"
    }
]
```
