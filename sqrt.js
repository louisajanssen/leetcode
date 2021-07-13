// Given a non-negative integer x, compute and return the square root of x.
//Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

var mySqrt = function(x) {
    let start = 1
    let end = x
    let num;
    let middle;
    
    
    if (x === 0) {
        return 0
    }
    
    if (x === 1) {
        return 1
    }
    
    if (x === 2) {
        return 1
    }
    
    while (start + 1 < end) {
        middle = Math.floor((start + end)/2)
        
        num = middle * middle
        
        if (num === x) {
            return middle
        } else if (num > x) {
            end = middle
        } else {
            start = middle
        }
    }
    
    if (num > x) {
        return middle - 1
    }
    
    if (num < x) {
        return middle
    }
};

let test1 = mySqrt(8)
console.log(test1, 2)

let test2 = mySqrt(0)
console.log(test2, 0)

let test3 = mySqrt(1024)
console.log(test3, 32)
