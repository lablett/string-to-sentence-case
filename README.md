# String to Sentence Case Converter

## **A JavaScript function to convert a string into sentence case**

### Features:
* Capitalise the first letter of every sentence
* Covert all but the first letter of a sentence to lowercase
* Return errors for the following input types:
    * Empty
    * Null
    * Undefined
    * Numeric
    * Array
    * Object
    * Date
    * Date-like string


## Getting Started

### Prerequisites

To run this code you will require [ Node.js](https://nodejs.org/en/) which comes with [ npm](https://www.npmjs.com/).  You can also use [ yarn](https://yarnpkg.com/) instead of npm.


### Installing Project Dependencies

In your terminal, navigate to the project folder (string-to-sentence-case) and install the required dependencies using either npm or yarn.

```
npm install
```
```
yarn install
```

### Running The Function

You can run this function in your terminal using Node.

First initialise the Node console
```
node
```
Then import the file containing the function
```
> const stringToSentenceCase = require('./StringToSentenceCase');
```
Then run the function as below with desired input
```
> stringToSentenceCase('hello')
'Hello'
```

### Running Tests

There are also tests that accompany this code, written using Jest:

* Capitalise first letter:
    * One character input should return capitalised
    * Only first letter returned capitalised for multiple character input
* All but first letter lowercase:
    * All lowercase input should be returned sentence case
    * Rogue capital letters in input should be returned sentence case
    * All uppercase input should be returned sentence case
* Empty, null, or undefined inputs:
    * Empty string input should return error
    * Null input should return null
    * Undefined input should return undefined
* Invalid inputs (not string):
    * Date input should return error
    * Numeric input should return error
    * Empty array input should return error
    * Populated array input should return error
    * Empty object input should return error
    * Populated object input should return error
    * String matches date format


You can run the tests using either npm or yarn:

```
npm run test
```
```
yarn test
```

### Limitations:
* Assumes input contains only one sentence: multiple sentences could be handled by splitting the input string into an array by valid punctuation, mapping this function to each string in the array, and then returning the concatenation of the results.
* Numbers input as strings or numbers within strings are accepted inputs.
* Proper nouns not recognised, these will be converted to lowercase unless occurring at the beginning of a sentence.
* No test for punctuation only inputs e.g. '.', '!', '?', these will return the string.
