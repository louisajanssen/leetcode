var reverse = function(x) {
    
    let reverseArray = []
    
    let stringArr = String(x).split('')
    let numArr = stringArr.map((num)=>{
        return Number(num)
    })
    
    const sign = Math.sign(x)
    
    if (sign === -1) {
        numArr.splice(0, 1)
    }

    
    for (let i = numArr.length - 1; i >= 0; i--) {
        console.log(numArr)
        if (numArr[i] === 0 && (numArr[i + 1] === 0 && numArr[i + 2] === undefined)){
            continue
        }
        reverseArray.push(numArr[i])
    }
    
    let reverseNum = Number(reverseArray.join(""))
    
    if (sign === -1) {
        reverseNum = -Math.abs(reverseNum)
    }
    
    if (reverseNum > 2147483647 || reverseNum < -2147483647) {
        return 0
    }
    
    return reverseNum
};

let test1 = reverse(123)
console.log(test1)

let test2 = reverse(-123)
console.log(test2)

let test3 = reverse(-2147483648)
console.log(test3)