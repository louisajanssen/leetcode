var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0
    }
    
    if (needle.length > haystack.length) {
        return -1
    }
    
    for (let j = 0; j < haystack.length; j++) {
        let hasStr = hasStrAtPosition(haystack, needle, j)
        if (hasStr) {
            return j
        }
    }
    
    return -1 
};

var hasStrAtPosition = function(haystack, needle, index) {
    
    if ((haystack.length - index) < needle.length) {
        return false
    }
    
    for (let i = 0; i < needle.length; i++) {
        if (needle[i] !== haystack[i + index]) {
            return false
        }
    }
    
    return true;
}


let test1 = strStr('mississippi', 'mississippi')
console.log(test1)

let test2 = strStr('abc', 'c')
console.log(test2)

let test3 = strStr('aaaaa', 'aaaaaa')
console.log(test3)