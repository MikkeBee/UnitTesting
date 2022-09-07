# CarStorage API

## cars.json

```json
[
  {
    "model": "Bored T-Model",
    "license": "ABC-1"
  },
  {
    "model": "Nova",
    "license": "XYZ-123"
  },
  {
    "model": "Bored T-Model",
    "license": "GTF-10"
  },
  {
    "model": "GTX",
    "license": "B-1"
  }
]
```

**search(key,value)**

Function returns an array of cars that matches the given criterion. If no match, returns an empty array.

If the parameters are missing, returns all cars in the array.

#### parameters:

- key: model or license
- value: value to be searched

### Examples

```js
search("model", "Nova");
```

returns

```json
[
  {
    "model": "Nova",
    "license": "XYZ-123"
  }
]
```

```js
search("model", "Bored T-model");
```

returns

```json
[
  {
    "model": "Bored T-Model",
    "license": "ABC-1"
  },
  {
    "model": "Bored T-Model",
    "license": "GTF-10"
  }
]
```

```js
search("license", "ABC-1");
```

returns

```json
[
  {
    "model": "Bored T-Model",
    "license": "ABC-1"
  }
]
```

```js
search("model", "x");
```

returns []

```js
search();

//or

search("model");
```

returns

```json
[
  {
    "model": "Bored T-Model",
    "license": "ABC-1"
  },
  {
    "model": "Nova",
    "license": "XYZ-123"
  },
  {
    "model": "Bored T-Model",
    "license": "GTF-10"
  },
  {
    "model": "GTX",
    "license": "B-1"
  }
]
```
