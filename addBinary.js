var addBinary = function(a, b) {
    
    let numArray = []
    let carry = '0';

    let maxLength = Math.max(a.length, b.length)

    for (let i = 0; i < maxLength; i++) {
        let sum = []
        let elemA = a[a.length - i - 1]
        let elemB = b[b.length - i - 1]

        //console.log('a: ', elemA,'b: ', elemB, 'carry: ', carry)
    
        sum = getBinaryNum(elemA ?? '0', elemB ?? '0', carry)

        //console.log('sum: ', sum)

        
        carry = sum[0]
        numArray.unshift(sum[1])
        //console.log('carry: ',carry, 'numArray: ', numArray)
    }

    if (carry === '1') {
        numArray.unshift(carry)
    }

    num = numArray.join('')

    return num
    
    
};

const convertToNum = (a) => {
    if (a === '1') {
        return 1
    }

    return 0
}

const getBinaryNum = (a,b, carry) => {

    let num = convertToNum(a) + convertToNum(b) + convertToNum(carry)

    if (num === 0) {
        return ['0', '0']
    } else if (num === 1) {
        return ['0', '1']
    } else if (num === 2) {
        return ['1', '0']
    } else {
        return ['1', '1']
    }

    
}
// let test = getBinaryNum('0', '0', '1')
// console.log(test)

let test1 = addBinary('1010', '1011')
console.log(test1, 10101)

