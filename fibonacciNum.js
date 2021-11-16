const fib = (n) => {

    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }

    let first = 0
    let second = 1

    for (let i = 2; i <= n; i++) {
        let newFib = first + second

        first = second 
        second = newFib
    }

    return second;
}

const test1 = fib(0)
console.log(test1)

const test2 = fib(4)
console.log(test2)

const test3 = fib(30)
console.log(test3)

