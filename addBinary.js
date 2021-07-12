var addBinary = function(a, b) {
    
    let numArray = []
    let carry = '0';

    let maxLength = Math.max(a.length, b.length)

    for (let i = 0; i < maxLength; i++) {
        let sum = []
        let elemA = a[a.length - i - 1]
        let elemB = b[b.length - i - 1]

        //console.log('a: ', elemA,'b: ', elemB, 'carry: ', carry)
        
        if (elemB === undefined) {
            sum = getBinaryNum(elemA, '0', carry)
        } else if (elemA === undefined) {
            sum = getBinaryNum('0', elemB, carry)
        }else {
            sum = getBinaryNum(elemA, elemB, carry)
        }

        //console.log('sum: ', sum)

        
        if (sum.length === 2) {
            carry = sum[0]
            numArray.unshift(sum[1])
        } else {
            carry = '0'
            numArray.unshift(sum[0])
        }
        //console.log('carry: ',carry, 'numArray: ', numArray)
    }

    if (carry === '1') {
        numArray.unshift(carry)
    }

    num = numArray.join('')

    return num
    
    
};

const getBinaryNum = (a,b, carry) => {

    //console.log(a, b, carry)

    if (a === '0' && b === '0' && carry === '1') {
        return ['1']
    } else if (a === '1' && b === '0' && carry === '1') {
        return ['1', '0']
    } else if (a === '0' && b === '1' && carry === '1') {
        return ['1', '0']
    } else if (a === '1' && b === '1' && carry === '1') {
        return ['1', '1']
    } else if (a === '1' && b === '1' ) {
        return ['1', '0']
    } else if (a === '1' && b === '0' ) {
        return ['1']
    } else if (a === '0' && b === '1') {
        return ['1']
    } else if (a === '0' && b === '0') {
        return ['0']
    }
}
// let test = getBinaryNum('0', '0', '1')
// console.log(test)

let test1 = addBinary('1010', '1011')
console.log(test1, 10101)

