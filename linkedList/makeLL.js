const makeLL = (array) => {

    if (array.length === 0) {
        return undefined
    }

    let head = {val: array[0], next: undefined}
    let head2 = head
    

    for (let i = 1; i < array.length; i++) {
        head.next = {val: array[i], next: undefined}

        head = head.next
    }

    return head2
}

let test1 = makeLL([1,2,3])
console.log(test1)

let test2 = makeLL([])
console.log(test2)