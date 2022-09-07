# Calc library API

## **sum(a,b)**

Function returns sum of two numbers. Numbers are passed to the function as parameters.

Parameters: a and b are numbers
Returns: the sum of given numbers

- if parameter is missing, throws an exception: `'parameter is missing'`
- if both parameters are given but parameters are not numbers, throws an exception `'only numbers allowed'`

### Test cases

#### Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(12,100) return 112

[2, -4, -2],
[-4, 2, -2],
[0, 0, 0],
[0, 3, 3],
[3, 0, 3],
[0, -3, -3],
[-3, 0, -3]

#### Floats

sum(10,11.5) return 21.5
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.0],
[-2.5, 0, -2.5],
[2.5, -2.5, 0],
[2.4, -2.5, -0.1]

#### 3. Missing parameter

- sum() throws an exception `'parameter is missing'`
- sum(1) throws an exception `'parameter is missing'`
- sum('a') throws an exception `'parameter is missing'`
- sum('') throws an exception `'parameter is missing'`

#### 4. Parameters are not numbers

-sum('1','2') throws an exception `'only numbers allowed'`
-sum('a',1) throws an exception `'only numbers allowed'`
-sum(1,'a') throws an exception `'only numbers allowed'`
-sum('a','b') throws an exception `'only numbers allowed'`
-sum('','') throws an exception `'only numbers allowed'`
-sum(null,1) throws an exception `'only numbers allowed'`
-sum(undefined,1) throws an exception `'only numbers allowed'`

['1','2'],
['a',1],
[1,'a'],
['a','b'],
['',''],
[null, 1],
[undefined, 1]

## **subtract(a,b)**

Function returns the difference of a - b of two numbers. The numbers are passed to the function as parameters.

Parameters: a and b are numbers
Returns: the difference of given numbers

- if parameter is missing, throws an exception: `'parameter is missing'`
- if both parameters are given but parameters are not numbers, throws an exception `'only numbers allowed'`

#### Integers

[1, 1, 0],
[2, 3, -1],
[-2, -4, 2],
[0, 0, 0],
[3, 0, 3],
[0, 3, -3]

#### Floats

[10, 11.5, -1.5],
[-2.5, 3, -5.5],
[2.5, 2.5, 0],
[2.4, -2.5, 4.9]

#### 3. Missing parameter

- minus() throws an exception `'parameter is missing'`
- minus(1) throws an exception `'parameter is missing'`
- minus('a') throws an exception `'parameter is missing'`
- minus('') throws an exception `'parameter is missing'`

[1, 'parameter missing'],
['a', 'parameter missing'],
['', 'parameter missing']

#### 4. Parameters are not numbers

-minus('1','2') throws an exception `'only numbers allowed'`
-minus('a',1) throws an exception `'only numbers allowed'`
-minus(1,'a') throws an exception `'only numbers allowed'`
-minus('a','b') throws an exception `'only numbers allowed'`
-minus('','') throws an exception `'only numbers allowed'`
-minus(null,1) throws an exception `'only numbers allowed'`
-minus(undefined,1) throws an exception `'only numbers allowed'`

['1','2'],
['a',1],
[1,'a'],
['a','b'],
['',''],
[null, 1],
[undefined, 1]

## **division(a,b)**

function divides(a,b) and returns a/b

Problems:
0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity
Infinity/Infinity => NaN
And all variations of +/- infinity

TestValues:
[0,0,Number.NaN],
[2,0,Number.POSITIVE_INFINITY],
[-2,0,Number.NEGATIVE_INFINITY]
