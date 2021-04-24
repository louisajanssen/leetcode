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


// const getIndexOfTarget = (target, arr) => {
//     for(const i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             return i;
//         }
//     }

//     return -1;
// }

// if lengths are different return false
// for each element1 in array1
    // if element1 is not contained in array2 return false
    // remove found element from array2
// return true

// Higher code quality

const twoArraysV2 = (array1, array2) => {

    if (array1.length !== array2.length) { 
        return false
    }

    for (const element of array1) { 
        const array2Index = array2.indexOf(element)
     
        if (array2Index === -1) {
            return false
        }
        array2.splice(array2Index, 1)
    }
    return true; 
}

//          Array   Hashset/map
// Contains O(N)    O(1)
// Insert   O(N)    O(1)
// Delete   O(N)    O(1)
// Access   O(1)    -

// Set has keys
// Map has key-value

// faster solution

const twoArrays = (array1, array2) => {

    if (array1.length !== array2.length) { 
        return false
    }

    const map = new Map()
    for(const element of array2) {
        const existing = map.get(element) ?? 0
        map.set(element, existing + 1)
    }

    for (const value of array1) { 
        const count = map.get(value)
        if (count === 0) {
            return false
        }
        map.set(value, count - 1)
    }
    return true; 
}
// Time complexity : 0(n+m)
// Space complexity: 0(m)


// const test1 = twoArrays([1,2,3], [1,2,3])
// console.log(test1, true) // expect true

// const test2 = twoArrays([1,2], [1,2,3])
// console.log(test2, false) // expect false

// const test4 = twoArrays([1], [1])
// console.log(test4, true) // expect true

// const test6 = twoArrays([1], [])
// console.log(test6, false) // expect false

// const test7 = twoArrays([1,2,3], [3,2,1])
// console.log(test7, true) // expect true

// const test8 = twoArrays([9,1,1,1], [9,1])
// console.log(test8, false) // expect false

const test9= twoArrays([1,1], [9,1])
console.log(test9, false) // expect false


