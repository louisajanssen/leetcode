// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.

var isValid = function(s) {
    
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    let bracketArr = []
    
    for (let char of s) {
        if (brackets[char]) {
            bracketArr.push(brackets[char])
        } else {
            if (char !== bracketArr.pop()) {
                return false
            }
        }
    }
    return (!bracketArr.length)
    
};

let test1 = isValid('()')
console.log(test1, true)

let test2 = isValid('()[]{}')
console.log(test2, true)

let test3 = isValid('([)]')
console.log(test3, false)