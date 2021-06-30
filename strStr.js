var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0
    }
    
    if (needle.length > haystack.length) {
        return -1
    }
    
    for (let j = 0; j < haystack.length; j++) {
        let isStr = findStr(haystack, needle, j)
        if (isStr === true) {
            return j
        }
    }
    
    return -1 
};

var findStr = function(haystack, needle, index) {
    
    let count = 0
    for (let i = index; i < index + 1; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] === haystack[i]) {
                count++
                i++
            } else {
                return false
            }
        }
    }
    if (count === needle.length) {
        return true
    }
    
    return false
}


let test1 = strStr('mississippi', 'mississippi')
console.log(test1)

let test2 = strStr('abc', 'c')
console.log(test2)

let test3 = strStr('aaaaa', 'aaaaaa')
console.log(test3)