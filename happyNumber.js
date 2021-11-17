const happyNum = n => {
    const set = new Set()

    while (n > 1) {
        n = squareNums(n)

        if (set.has(n) === true) {
            return false
        }

        set.add(n)
    }
    if (n === 1) {
        return true
    }
}

const squareNums = (n) => {
    n = n.toString()
    let result = 0

    for (let i = 0; i < n.length; i++) {
        let num = parseInt(n[i])

        result += num * num
    }

    return result
}


const test1 = happyNum(19)
console.log(test1, true)

const test2 = happyNum(222)
console.log(test2, false)

const test3 = happyNum(100)
console.log(test3, true)