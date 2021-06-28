const searchLL = (head, target) => {

    while (head !== undefined) {
        if (head.val === target) {
            return true
        }

        head = head.next
    }

    return false
}

let test1 = searchLL({val: 1, next: { val: 2, next: {val : 3, next: undefined}}}, 1)
console.log(test1)

let test2 = searchLL({val: 1, next: { val: 2, next: {val : 3, next: undefined}}}, 3)
console.log(test2)

let test3 = searchLL({val: 1, next: { val: 2, next: {val : 3, next: {val: 4, next: {val: 5, next: undefined}}}}}, 6)
console.log(test3)