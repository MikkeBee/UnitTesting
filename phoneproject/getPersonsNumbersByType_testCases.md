# Test Cases for getPersonsNumbersByType

### **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of given `type` belonging to a given person with given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing, an exception `'missing parameter'` is thrown.

For example the work numbers of Leila Hölkki:

```json
["87654321", "05040302"]
```

Before tests create register object with the default data

### Test 1: Work numbers of Leila Hölkki

```js
register.getPersonsNumbersByType("Leila", "Hölkki", "work");
```

returns

```json
["87654321", "05040302"]
```

### Test 2: mobile numbers of Matt River

```js
register.getPersonsNumbersByType("Matt", "River", "mobile");
```

return

```json
["045678912"]
```

### Test 2B: home number of Matt River

```js
register.getPersonsNumberByType("Matt", "River", "home");
```

return

```json
["576890123"]
```

### Test 3: Wrong type or name returns an empty array

```js
register.getPersonsNumbersByType("Matt", "River", "x");
register.getPersonsNumbersByType("Matt", "x", "mobile");
register.getPersonsNumbersByType("x", "River", "mobile");
```

### Test 4: Missing parameter throws an exception: 'missing parameter'

```js
register.getPersonsNumbersByType("Matt", "River", "mobile");
register.getPersonsNumbersByType("Matt");
register.getPersonsNumbersByType();
```

### Test 5: If data is empty array (no persons found)

```js
const register = new PhoneRegister([]);
register.
```
