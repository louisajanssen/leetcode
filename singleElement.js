// given an array, find the element that only appears once

// [1,2,2] -> 1
// [3,8,9,8,3,4,5,5,4] -> 9
// [1] -> 1

const singleElement = (array) => {
    // if array length is 1, return element contained in array
    // build a new map
    // go through array
    // get elements in map, if it doesn't exists add with value of one
        // if it does exists in map increase value by one
    // get map elements, return element with 1 as value

    if (array.length === 1) {
        return array[0]
    }

    const map = new Map()
    for (const element of array) {
        const existing = map.get(element) ?? 0
        map.set(element, existing + 1)
    }

    for (const [key, value] of map) {
        if (value === 1) {
            return key
        }
    }
    
    return null;
}

const test1 = singleElement([1,2,2])
console.log(test1, 2)

const test2 = singleElement([3,8,9,8,3,4,5,5,4])
console.log(test2, 9)

const test3 = singleElement([1])
console.log(test3, 1)
