// new fun receiving two arrays and determines if they contain the same elements

const twoArraysOld = (array1, array2) => {
    // if length of array1 is not equal to length of array2
        // return false
    // declare var found
    // go through array1
        // if element in array1 can be found anywhere in array2
            // set found to true
            // remove found element from array2
        // if element not found
            // set found to false and return false
    // return variable found

    if (array1.length !== array2.length) { 
        return false
    }
    let found; // true

    for (let i = 0; i < array1.length; i++) { // 1
        const target = array1[i] // 1
        let array2Index; // 0
        for (let k = 0; k < array2.length; k++) { // 0
            if (array2[k] === target) { // false
                found = true
                array2Index = k
                break;
            } else {
                continue;
            }
        }
        if (found === undefined) { // fal
            return false
        } else {
            array2.splice(array2Index, 1) // [9]
            found = undefined
        }
    }
    return true;
    

}

// Better solution

// const getIndexOfTarget = (target, arr) => {
//     for(const i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             return i;
//         }
//     }

//     return -1;
// }

const twoArrays = (array1, array2) => {

    if (array1.length !== array2.length) { 
        return false
    }

    for (let i = 0; i < array1.length; i++) { 
        const array2Index = array2.indexOf(array1[i])
     
        if (array2Index === -1) {
            return false
        }
        array2.splice(array2Index, 1)
    }
    return true; 
}


const test1 = twoArrays([1,2,3], [1,2,3])
console.log(test1, true) // expect true

const test2 = twoArrays([1,2], [1,2,3])
console.log(test2, false) // expect false

const test4 = twoArrays([1], [1])
console.log(test4, true) // expect true

const test6 = twoArrays([1], [])
console.log(test6, false) // expect false

const test7 = twoArrays([1,2,3], [3,2,1])
console.log(test7, true) // expect true

const test8 = twoArrays([9,1,1,1], [9,1])
console.log(test8, false) // expect false

const test9= twoArrays([1,1], [9,1])
console.log(test9, false) // expect false


