function linearSearch(arr, targetNumber) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetNumber) {
            return arr[i]; // Return the value instead of the index
        }
    }
    return null; // Return null if not found
}

console.log(linearSearch([1, 5, 10, 14, 50], 14)); // Output: 14

// I targeted the first index of the array instead of the value itself. My Bad! Hence why I made the change to return arr[i] instead of i.