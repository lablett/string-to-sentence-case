// A function to convert a string to sentence case

const stringToSentenceCase = (str) => {

	try {
		// Try running code below

		if (str == null) {
			// Check if string is null or undefined
			// Equality operator ignores data type (typeof null==='object', typeof undefined==='undefined') and so null==undefined returns true
			return str;
		} else if (!str) {
			// Check for empty string, same as str.length <1
			return 'error';
		} else if (typeof str !== 'string') {
			// Check for non-string input types
			return 'error';
		} else if (str.slice(0, 10).match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
			// Check string is not a date beginning DD-MM-YYYY
			return 'error';
		} else {
			// If input does not match above conditions it is considered valid
			// Take the first character and convert to uppercase
			// Take remaining characters from index 1 to the length of the string and convert to lowercase
			// Return concatenation of these two expressions
			return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
		}
		
	} catch (error) {
		// If code fails to run, catch and return string 'error'
		return 'error';
	}
}

module.exports = stringToSentenceCase;