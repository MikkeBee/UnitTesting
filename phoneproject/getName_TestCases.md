# Test Cases for getName

## **getName(number)**

The method searches for the given phone number. If the number is found, returns json object of form:

```json
{ "firstname": "", "lastname": "" }
```

If no phone matches the given number, then `null` is returned.
If the parameter is missing, `null` is also returned.

For example get the owner of "045678912"

```json
{ "firstname": "Matt", "lastname": "River" }
```

### Test 1: Wrong number

call

```js
register.getName("0000");
```

returns `null`

### Test 2: Parameter missing

call

```js
register.getName();
```

returns `null`

### Test 3: Get the name of the number

call

```js
register.getName("12345678");
```

returns

```json
{
  "firstname": "Leila",
  "lastname": "Hökki"
}
```

### Test 3B: Get the name of the number

```js
const testValues = [
  ["87654321", { firstname: "Leila", lastname: "Hökki" }],
  ["05040302", { firstname: "Leila", lastname: "Hökki" }],
  ["045678912", { firstname: "Matt", lastname: "River" }],
];
```

returns

```json
{
  "firstname": "Leila",
  "lastname": "Hökki"
}
```
