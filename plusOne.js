//Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

//You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
    
    let res = []
    let num = digits[digits.length-1] + 1
    res.unshift(num % 10)
    
    for (let i = digits.length - 2; i >= 0; i--) {
        console.log(res)
        num = digits[i] + (num >= 10 ? 1 : 0)
        res.unshift(num % 10)
    }
    
    if (num >= 10) {
        res.unshift(1)
    }
    
    return res
};

let test1 = plusOne([1, 2, 3])
console.log(test1)

let test2 = plusOne([7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6])
console.log(test2)

let test3 = plusOne([0])
console.log(test3)