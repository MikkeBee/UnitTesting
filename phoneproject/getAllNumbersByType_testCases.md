# Test Cases for getAllNumbersByType

### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type.

If no number of given type is found, and empty array [] is returned.
If a person has multiple numbers of given type, each of them will be in it's own object.

If a parameter is missing, an exception `'missing parameter'` is thrown.

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

For example type work

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "3214569" }
  }
]
```

### Test 1: get all work numbers using default data

```js
register.getAllNumbersByType("work");
```

return

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "3214569" }
  }
]
```

### Test 2: Get all mobile numbers using default data

```js
register.getAllNumbersByType("mobile");
```

return

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "045678912" }
  }
]
```

### Test 2B: Get all home numbers using default data

```js
register.getAllNumbersByType("home");
```

return

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "home", "tel": "567890123" }
  }
]
```

### Test 3: type 'x' will return an empty array

```js
register.getAllNumbersByType("x");
```

returns []

### Test 4: missing parameter throws an exception: 'missing parameter'

```js
register.getAllNumbersByType();
```

throws an exception `'missing parameter'`

### Test 5: Person has type corresponding number missing

testData:

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "phones": [
      { "type": "home", "number": "" },
      { "type": "home" },
      { "type": "home", "number": "12121212" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Smith"
  }
]
```

```js
register.getAllNumbersByType("home");
```

expect to return

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "number": { "type": "home", "tel": "12121212" }
  }
]
```
