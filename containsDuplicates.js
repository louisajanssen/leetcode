// func that reveives string and determines whether it has duplicate chars

// 'mama' -> true
// 'jorge' -> false
// 'lullaby' -> true

const containsDuplicates = (string) => {
    // if length of string is 1 return false
    // make new Map, for every element already contained in map increase value
    // for every element not contained, add to map with value 1
    // go through map, if value greater than 1, return true
    // return false

    if (string.length <= 1) {
        return false
    }

    const map = new Map()
    for (const element of string) {
        const existing = map.get(element) ?? 0
        map.set(element, existing + 1)
    }

    for (const [key, value] of map) {
        if (value > 1) {
            return true
        }
    }
    return false
}

const test1 = containsDuplicates('mama')
console.log(test1, true)

const test2 = containsDuplicates('jorge')
console.log(test2, false)

const test3 = containsDuplicates('lullaby')
console.log(test3, true)

const test4 = containsDuplicates('')
console.log(test4, false)