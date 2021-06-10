// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
    let stringArr = String(n).split('')
    let numArr = stringArr.map((num)=>{
        return Number(num)
    })
    
    let product = 1;
    let sum = 0;
    
    for (let i = 0; i < numArr.length; i++) {
        product *= numArr[i]
        sum += numArr[i]
    }
    
    let result = product - sum
    
    return result
};

let test1 = subtractProductAndSum(234) 
console.log(test1)

let test2 = subtractProductAndSum(4421) 
console.log(test2)