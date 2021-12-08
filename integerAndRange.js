

// it will validate to see if a number that's passed in is in the range 
// of lower and upper bounds.
// it will take a number 'n', and a lower and upper bound. And tell you
// whether or not it's within the bounds. Greater than or equal to the lower 
// bound, but not including the upper one.

function integerAndRange(n, lowerBound, upperBound){
    if (n >= lowerBound && n < upperBound){
        return true;
    } else {
        return false;
    }
}

console.log(integerAndRange(5, 10, 15));
console.log(integerAndRange(15, 10, 15));
