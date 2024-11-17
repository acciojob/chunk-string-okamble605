function chunkString(str, chunkLength) {
    // Check if the string is null or undefined
    if (str === null || str === undefined) {
        return [];
    }
    
    const result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        // Slice the string into chunks of the given length
        result.push(str.slice(i, i + chunkLength));
    }
    
    return result;
}

console.log(chunkString("Hello, world!", 5));  // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));           // ["12", "34", "5"]
console.log(chunkString("abc", 5));             // ["abc"]
console.log(chunkString(null, 5));              // []

