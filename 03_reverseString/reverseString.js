const reverseString = function(string) {
let newString = ''
let stringPart
    while (string.length > 0) {
        stringPart = string.slice(string.length - 1)
        newString += stringPart
        string = string.slice(0,string.length - 1)
    }
return newString
};

// Do not edit below this line
module.exports = reverseString;
