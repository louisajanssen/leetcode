var isPowerOfTwo = function(n) {
    for (let i = 0; i < 32; i++) {
        if (2 ** i === n) {
            return true
        } else {
            continue;
        }
    }
    
    return false
};

let test1 = isPowerOfTwo(1)
console.log(test1, true)