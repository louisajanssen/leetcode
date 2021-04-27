//given an integer x, return true if x is palindrom integer

var isPalindrome = function(x) {
    let backwards = '';
    let string = x.toString()
    for (let i = string.length - 1; i >= 0; i--) {
        backwards += string[i]
    }
    if (backwards === string) {
        return true
    }
    return false;
};

const test1 = isPalindrome(121)
console.log(test1, true)

const test2 = isPalindrome(-121)
console.log(test2, false)

const test3 = isPalindrome(16461)
console.log(test3, true)

const test4 = isPalindrome(0)
console.log(test4, true)