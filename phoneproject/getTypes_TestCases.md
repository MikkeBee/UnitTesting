# Test Cases for getTypes

## **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned.

For example

```json
["home", "work", "mobile"]
```

Before tests create `register` object from the class PhoneRegister

### Test 1: use default data

```js
register.getTypes();
```

returns

```json
["home", "work", "mobile"]
```

### Test 2: person has no phone

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

Expect this to return an empty array []

### Test 3: no persons in phoneregister

testData is []

returns an empty array []

### Test 4: type is missing or is an empty string

testData

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "567890123" },
      { "type": "mobile", "number": "045678912" },
      { "type": "work", "number": "3214569" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [
      { "number": "3333333" },
      { "type": "cell", "number": "12398745" },
      { "type": "work", "number": "00112233" }
    ]
  }
]
```

create new register with testData

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect to get

```json
["work", "home", "mobile", "cell"]
```

### Test 5. Some phones are missing

testData

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "6666666" },
      { "type": "mobile", "number": "12121212" }
    ]
  }
]
```

expect to get

```json
["mobile", "home"]
```
